// ========================================
// YOUR TASK: Implement these functions!
// ========================================

/**
 * TODO: Implement the debounce function
 * 
 * Debouncing delays the execution of a function until after a certain 
 * amount of time has passed since it was last called.
 * 
 * @param {Function} func - The function to debounce
 * @param {number} delay - The delay in milliseconds
 * @returns {Function} - The debounced function
 */
function debounce(func, delay) {
    // YOUR CODE HERE
    // Hint: Use setTimeout and clearTimeout
    // Store the timeout ID and clear it on each call
    
    return function() {
        // YOUR IMPLEMENTATION
    }
}

/**
 * TODO: Implement the throttle function
 * 
 * Throttling ensures a function is only called once in a specified time period,
 * no matter how many times it's triggered.
 * 
 * @param {Function} func - The function to throttle
 * @param {number} limit - The time limit in milliseconds
 * @returns {Function} - The throttled function
 */
function throttle(func, limit) {
    // YOUR CODE HERE
    // Hint: Use a flag to track if function can be called
    // Use setTimeout to reset the flag after the limit
    
    return function() {
        // YOUR IMPLEMENTATION
    }
}

// ========================================
// API & Event Handlers (Already implemented)
// ========================================

// API Configuration
const API_URL = 'https://dummyjson.com/products/search';
let apiCallCount = 0;

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const apiCallCountEl = document.getElementById('apiCallCount');
const lastCallTimeEl = document.getElementById('lastCallTime');

const mouseTracker = document.getElementById('mouseTracker');
const mouseXEl = document.getElementById('mouseX');
const mouseYEl = document.getElementById('mouseY');
const updateCountEl = document.getElementById('updateCount');
let updateCount = 0;

const windowSizeEl = document.getElementById('windowSize');
const resizeCountEl = document.getElementById('resizeCount');
let resizeCount = 0;

// ========================================
// 1. DEBOUNCING - Search Products
// ========================================

async function searchProducts(query) {
    if (!query.trim()) {
        searchResults.innerHTML = '';
        return;
    }

    apiCallCount++;
    apiCallCountEl.textContent = apiCallCount;
    lastCallTimeEl.textContent = new Date().toLocaleTimeString();

    searchResults.innerHTML = '<div class="loading">🔄 Searching...</div>';

    try {
        const response = await fetch(`${API_URL}?q=${encodeURIComponent(query)}&limit=10`);
        const data = await response.json();
        
        displayResults(data.products);
    } catch (error) {
        searchResults.innerHTML = '<div class="error">❌ Error fetching products</div>';
        console.error('Error:', error);
    }
}

function displayResults(products) {
    if (products.length === 0) {
        searchResults.innerHTML = '<div class="loading">No products found</div>';
        return;
    }

    searchResults.innerHTML = products.map(product => `
        <div class="product-item">
            <img src="${product.thumbnail}" alt="${product.title}">
            <div class="product-info">
                <h3>${product.title}</h3>
                <p>${product.description.substring(0, 100)}...</p>
                <span class="product-price">$${product.price}</span>
            </div>
        </div>
    `).join('');
}

// TODO: Apply debounce to searchProducts
// Uncomment and modify this line after implementing debounce():
// const debouncedSearch = debounce(searchProducts, 500);

// Event Listener for Search
searchInput.addEventListener('input', (e) => {
    // TODO: Call debouncedSearch instead of searchProducts directly
    // debouncedSearch(e.target.value);
    
    // TEMPORARY: Remove this line after implementing debounce
    searchProducts(e.target.value);
});

// ========================================
// 2. THROTTLING - Mouse Movement
// ========================================

function updateMousePosition(e) {
    updateCount++;
    updateCountEl.textContent = updateCount;
    
    const rect = mouseTracker.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    
    mouseXEl.textContent = x;
    mouseYEl.textContent = y;
    
    // Visual feedback
    mouseTracker.style.background = `radial-gradient(circle at ${x}px ${y}px, #667eea, #c3cfe2)`;
}

// TODO: Apply throttle to updateMousePosition
// Uncomment and modify this line after implementing throttle():
// const throttledMouseMove = throttle(updateMousePosition, 100);

// Event Listener for Mouse Movement
mouseTracker.addEventListener('mousemove', (e) => {
    // TODO: Call throttledMouseMove instead of updateMousePosition directly
    // throttledMouseMove(e);
    
    // TEMPORARY: Remove this line after implementing throttle
    updateMousePosition(e);
});

// ========================================
// 3. THROTTLING - Window Resize
// ========================================

function handleResize() {
    resizeCount++;
    resizeCountEl.textContent = resizeCount;
    windowSizeEl.textContent = `${window.innerWidth}px × ${window.innerHeight}px`;
}

// TODO: Apply throttle to handleResize
// Uncomment and modify this line after implementing throttle():
// const throttledResize = throttle(handleResize, 500);

// Event Listener for Window Resize
window.addEventListener('resize', () => {
    // TODO: Call throttledResize instead of handleResize directly
    // throttledResize();
    
    // TEMPORARY: Remove this line after implementing throttle
    handleResize();
});

// Initialize window size
handleResize();

// ========================================
// Tips for Implementation:
// ========================================
// 
// DEBOUNCE:
// - Use setTimeout to delay function execution
// - Clear previous timeout on each new call
// - Only execute function after delay period with no new calls
//
// THROTTLE:
// - Use a boolean flag to track if function can execute
// - Only allow execution if enough time has passed
// - Use setTimeout to reset the flag after the limit
//
// Test your implementation by:
// 1. Typing in the search box (watch API call count)
// 2. Moving mouse in the tracker (watch update count)
// 3. Resizing the window (watch resize count)
// ========================================
