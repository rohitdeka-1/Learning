import express from 'express';
import http from 'node:http';
import { connect } from "./db/index.js"
import { startSocketServer } from "./sockets/index.js";

// Doubt may come in typescript that when to use the types like : Promise<void> and route :routes in typescript
// so the trick is to use the types when we are defining the function and for routes we can directly use the express router without any types because it will automatically infer the types from the express module.
// In this case, we are defining the startServer function which is an async function that returns a Promise<void> because it does not return any value. We are also using the express router to define our routes without any types because it will automatically infer the types from the express module.

//and more tips
// 1. Always use the types when defining functions to ensure type safety and better code readability.
// 2. Use the express router to define your routes without any types because it will automatically infer the types from the express module.
// 3. Always handle errors properly in your async functions to avoid unhandled promise rejections and ensure that your application is robust and reliable.

//now questions arrises why will the function return a promise?
// The function will return a promise because it is an async function. An async function always returns a promise, and the value that is returned from the function will be wrapped in a promise. In this case, since the function does not return any value, it will return a promise that resolves to undefined. This is why we use the type Promise<void> to indicate that the function returns a promise that resolves to void (i.e., it does not return any value).

// to answer what is a promise and from hero to advanced
// a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous-like manner, making it easier to read and maintain. A promise can be in one of three states: pending, fulfilled, or rejected. When a promise is fulfilled, it means that the asynchronous operation has completed successfully, and the resulting value is available. When a promise is rejected, it means that the asynchronous operation has failed, and an error is available. Promises provide methods like .then() and .catch() to handle the fulfillment and rejection of the promise, allowing you to chain multiple asynchronous operations together in a clean and organized way.

//to answer what is async and await
// async and await are keywords in JavaScript that allow you to write asynchronous code in a more synchronous-like manner. The async keyword is used to define an asynchronous function, which returns a promise. The await keyword is used inside an async function to pause the execution of the function until a promise is resolved or rejected. When you use await, it waits for the promise to resolve and returns the resulting value. If the promise is rejected, it throws an error that can be caught using a try-catch block. Using async and await can make your code easier to read and maintain, as it allows you to write asynchronous code in a more linear and straightforward way.

// now to make a socket io server with redis pub sub shared.
// To create a Socket.IO server with Redis Pub/Sub shared, you can follow these steps:

// 1. Install the necessary dependencies:
//    - socket.io: for real-time communication
//    - redis: for Redis Pub/Sub
//    - ioredis: a Redis client for Node.js

// npm install socket.io redis ioredis
//npm install --save-dev @types/socket.io @types/redis @types/ioredis


//to install on typescript do we need types ?
// Yes, when using TypeScript, it is recommended to install the type definitions for the libraries you are using. This allows you to have better type checking and autocompletion in your code. For example, if you are using Socket.IO, you can install the type definitions with the following command:
// npm install --save-dev @types/socket.io

//now that all the packages are installed
// lets start configuring our server with socket.io and redis pub/sub
// we have a modular structure for our server
// controller , service , routes sockets and models
// we will create a socket server in the sockets folder and we will use redis pub/sub to share the messages between the different instances of the server
// we will use the professional structure for the socket and adapter.
// so to understand where to put the socket server and where the adapter 
// this is the perfect structure for the socket server and adapter:

// - src
//   - controllers
//   - services
//   - routes
//   - sockets\
//    - index.ts (socket server configuration)
//   - models
//  - adapters
//    - redisAdapter.ts (redis adapter configuration)
// In this structure, the socket server configuration is placed in the sockets folder, and the Redis adapter configuration is placed in the adapters folder. This separation of concerns allows for better organization and maintainability of the codebase. The socket server can focus on handling real-time communication, while the adapter can focus on managing the Redis Pub/Sub functionality.

//now we will create the socket server configuration in the sockets/index.ts file and the Redis adapter configuration in the adapters/redisAdapter.ts file. We will then use these configurations in our main server file (index.ts) to set up the Socket.IO server with Redis Pub/Sub shared.

//  we have already created the Redis adapter configuration in the adapters/redisAdapter.ts file and the socket server configuration in the sockets/index.ts file. Now we will import the startSocketServer function from the sockets/index.ts file and call it in our main server file (index.ts) to start the Socket.IO server with Redis Pub/Sub shared. We will also set up an HTTP server using express and listen on a specific port for incoming requests.



async function startServer(): Promise<void> {
    await connect();
    
    const app = express();
    const httpServer = http.createServer(app);

    app.get('/health', (req, res) => {
        res.send('Server is running!');
    });

    await startSocketServer(httpServer);

    httpServer.listen(3000, () => {
        console.log(`Server running on port ${'http://localhost:3000'}`);
    });
};


startServer();
