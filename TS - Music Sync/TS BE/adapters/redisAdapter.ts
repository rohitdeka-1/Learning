// now we will setup the redis adapter for our application
// we will create a connect function that will establish a connection to the Redis server and return the Redis client instance
// we will then use this connect function in our socket server configuration to ensure that the Socket.IO server is properly configured to use Redis Pub/Sub for sharing messages between different instances of the server 

//lets setup the redis adapter in the adapters/redisAdapter.ts file

import { Redis } from 'ioredis';
import { createAdapter } from '@socket.io/redis-adapter';

const redisUrl = process.env.REDIS_URL;
const redisHost = process.env.REDIS_HOST ?? 'localhost';
const redisPort = Number(process.env.REDIS_PORT ?? 6379);

export async function createRedisAdapter() {
    const redisOptions = {
        lazyConnect: true,
        maxRetriesPerRequest: 1,
        retryStrategy: () => null,
    };

    const pubClient = redisUrl
        ? new Redis(redisUrl, redisOptions)
        : new Redis({ host: redisHost, port: redisPort, ...redisOptions });
    const subClient = pubClient.duplicate();

    const logRedisError = (err: Error) => {
        console.error(`[redis] ${err.message}`);
    };

    pubClient.on('error', logRedisError);
    subClient.on('error', logRedisError);

    await Promise.all([pubClient.connect(), subClient.connect()]);
    return createAdapter(pubClient, subClient);
}  


//The code explanation
// In this code, we are importing the Redis client from the ioredis library and the createAdapter function from the @socket.io/redis-adapter package. We then create two Redis clients, one for publishing messages (pubClient) and one for subscribing to messages (subClient). Both clients are configured to connect to a Redis server running on localhost at port 6379.

// The createRedisAdapter function is an asynchronous function that establishes connections for both the pubClient and subClient using Promise.all to ensure that both connections are established before proceeding. Once the connections are established, it returns a Redis adapter created using the createAdapter function, which takes the pubClient and subClient as arguments. This adapter can then be used in the Socket.IO server configuration to enable Redis Pub/Sub functionality for sharing messages between different instances of the server.

//now you can go and setup your socket server configuration in the sockets/index.ts file and use the createRedisAdapter function to set up the Redis adapter for your Socket.IO server. This will allow you to share messages between different instances of the server using Redis Pub/Sub.
