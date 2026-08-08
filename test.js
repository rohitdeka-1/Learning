import http from 'k6/http';
import { check, sleep, group } from 'k6';
import { SharedArray } from 'k6/data';
import exec from 'k6/execution';

const BASE = 'https://the-blessing-store.netlify.app';

// SPA routes — Netlify serves index.html for all of these
const ROUTES = new SharedArray('routes', () => [
  '/',
  '/shop',
  '/store',
  '/products',
  '/about',
  '/contact',
  '/consultation',
  '/cart',
  '/blog',
]);

const STATIC_ASSETS = new SharedArray('assets', () => [
  '/assets/index-VBjz9X0l.js',
  '/assets/index-DrfBBICf.css',
  '/assets/brand-logo-D_HDuLlO.jpg',
]);

const SEARCH_QUERIES = [
  'yantra',
  'bracelet',
  'puja',
  'vastu',
  'rudraksha',
  'consultation',
  'tarot',
  'astrology',
  'spiritual',
  'healing',
];

const HEADERS = {
  'User-Agent': 'k6-stress-test/2.0 (The Blessing Store — owner authorized)',
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
  'Cache-Control': 'no-cache',
  Connection: 'keep-alive',
};

const JSON_HEADERS = {
  ...HEADERS,
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json',
};

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function cacheBust() {
  return `_cb=${Date.now()}_${exec.vu.idInTest}_${Math.random().toString(36).slice(2, 8)}`;
}

function safeBodyIncludes(response, needle) {
  return response.body != null && String(response.body).includes(needle);
}

function assertOk(response, label) {
  check(response, {
    [`${label} status 2xx/3xx`]: (r) => r.status >= 200 && r.status < 400,
    [`${label} has body`]: (r) => r.body != null && r.body.length > 0,
  });
}

// ─── Scenario 1: sustained ramp + hold (main traffic) ───────────────────────
// ─── Scenario 2: spike burst (sudden 150 VUs) ───────────────────────────────
// ─── Scenario 3: constant arrival rate (request flood) ──────────────────────
export const options = {
  scenarios: {
    ramp_and_hold: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '20s', target: 40 },
        { duration: '30s', target: 80 },
        { duration: '1m', target: 120 },
        { duration: '45s', target: 120 },
        { duration: '20s', target: 0 },
      ],
      gracefulRampDown: '10s',
      exec: 'browseSession',
    },
    spike_burst: {
      executor: 'ramping-vus',
      startTime: '45s',
      startVUs: 0,
      stages: [
        { duration: '5s', target: 150 },
        { duration: '30s', target: 150 },
        { duration: '10s', target: 0 },
      ],
      gracefulRampDown: '5s',
      exec: 'aggressiveBurst',
    },
    request_flood: {
      executor: 'constant-arrival-rate',
      startTime: '30s',
      rate: 80,
      timeUnit: '1s',
      duration: '1m30s',
      preAllocatedVUs: 100,
      maxVUs: 200,
      exec: 'singlePageHammer',
    },
    asset_heavy: {
      executor: 'constant-vus',
      startTime: '15s',
      vus: 30,
      duration: '2m',
      exec: 'downloadAssets',
    },
  },
  thresholds: {
    http_req_failed: ['rate<0.15'],
    http_req_duration: ['p(95)<5000', 'p(99)<10000'],
    'http_req_duration{scenario:spike_burst}': ['p(95)<8000'],
    checks: ['rate>0.5'],
  },
  discardResponseBodies: false,
  noConnectionReuse: false,
  userAgent: HEADERS['User-Agent'],
};

// Simulates a user clicking around the SPA + loading static bundles
export function browseSession() {
  group('homepage', () => {
    const home = http.get(`${BASE}/?${cacheBust()}`, { headers: HEADERS, tags: { name: 'GET /' } });
    assertOk(home, 'home');
    check(home, {
      'home has React root': (r) => safeBodyIncludes(r, 'id="root"'),
    });
  });

  group('parallel asset prefetch', () => {
    const batch = STATIC_ASSETS.map((path) => [
      'GET',
      `${BASE}${path}?${cacheBust()}`,
      null,
      { headers: HEADERS, tags: { name: `GET ${path}` } },
    ]);
    const responses = http.batch(batch);
    responses.forEach((res, i) => assertOk(res, STATIC_ASSETS[i]));
  });

  group('route navigation', () => {
    const hops = 2 + Math.floor(Math.random() * 4);
    for (let i = 0; i < hops; i++) {
      const route = pick(ROUTES);
      const res = http.get(`${BASE}${route}?${cacheBust()}`, {
        headers: HEADERS,
        tags: { name: `GET ${route}` },
      });
      assertOk(res, route);
      sleep(Math.random() * 0.3);
    }
  });

  group('search simulation', () => {
    const q = pick(SEARCH_QUERIES);
    const res = http.get(`${BASE}/shop?q=${encodeURIComponent(q)}&${cacheBust()}`, {
      headers: HEADERS,
      tags: { name: 'GET /shop?q' },
    });
    assertOk(res, 'shop search');
  });

  sleep(Math.random() * 0.5);
}

// Zero-think-time burst: many parallel requests per VU iteration
export function aggressiveBurst() {
  const routeBatch = ROUTES.map((route) => [
    'GET',
    `${BASE}${route}?${cacheBust()}`,
    null,
    { headers: HEADERS, tags: { name: `BURST ${route}` } },
  ]);

  const assetBatch = STATIC_ASSETS.map((path) => [
    'GET',
    `${BASE}${path}?${cacheBust()}`,
    null,
    { headers: { ...HEADERS, Accept: '*/*' }, tags: { name: `BURST ${path}` } },
  ]);

  const all = routeBatch.concat(assetBatch);
  const responses = http.batch(all);
  responses.forEach((res) => {
    check(res, {
      'burst got response': (r) => r.status > 0,
    });
  });

  // Extra double-hit on homepage to stress CDN edge
  http.get(`${BASE}/?${cacheBust()}`, { headers: HEADERS, tags: { name: 'BURST / repeat' } });
  http.get(`${BASE}/?${cacheBust()}`, { headers: HEADERS, tags: { name: 'BURST / repeat 2' } });
}

// High-frequency single-endpoint hammer (worst case for one route)
export function singlePageHammer() {
  const route = pick(ROUTES);
  const res = http.get(`${BASE}${route}?${cacheBust()}`, {
    headers: HEADERS,
    tags: { name: 'HAMMER' },
  });
  check(res, {
    'hammer status ok': (r) => r.status >= 200 && r.status < 500,
  });
}

// Downloads full JS/CSS/image payloads repeatedly — bandwidth + origin stress
export function downloadAssets() {
  group('full asset download', () => {
    const batch = [
      ['GET', `${BASE}/assets/index-VBjz9X0l.js?${cacheBust()}`, null, { headers: HEADERS }],
      ['GET', `${BASE}/assets/index-DrfBBICf.css?${cacheBust()}`, null, { headers: HEADERS }],
      ['GET', `${BASE}/assets/brand-logo-D_HDuLlO.jpg?${cacheBust()}`, null, { headers: HEADERS }],
      ['GET', 'https://fonts.googleapis.com/css2?family=Jost:wght@400&display=swap', null, { headers: HEADERS }],
    ];
    const responses = http.batch(batch);
    responses.forEach((res, i) => {
      check(res, {
        [`asset ${i} loaded`]: (r) => r.status === 200 && r.body != null,
      });
    });
  });

  group('api probe (expect 404/405 — tests error handling)', () => {
    const probes = [
      http.get(`${BASE}/api/products?${cacheBust()}`, { headers: JSON_HEADERS }),
      http.get(`${BASE}/api/cart?${cacheBust()}`, { headers: JSON_HEADERS }),
      http.post(
        `${BASE}/api/contact?${cacheBust()}`,
        JSON.stringify({ name: 'k6', email: 'stress@test.local', message: 'load test' }),
        { headers: JSON_HEADERS },
      ),
    ];
    probes.forEach((res) => {
      check(res, {
        'api probe responded': (r) => r.status > 0,
      });
    });
  });

  sleep(0.1 + Math.random() * 0.2);
}

// Default export kept for `k6 run test.js` without scenario override
export default browseSession;
