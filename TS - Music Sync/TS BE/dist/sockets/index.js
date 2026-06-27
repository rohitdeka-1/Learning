import { Server } from "socket.io";
import { createRedisAdapter } from "../adapters/redisAdapter.js";
export async function startSocketServer(httpServer) {
    const io = new Server(httpServer, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"],
        },
    });
    try {
        io.adapter(await createRedisAdapter());
        console.log("socket.io redis adapter connected");
    }
    catch (err) {
        console.error("socket.io redis adapter unavailable; using in-memory adapter");
        console.error(err);
    }
    io.on("connection", (socket) => {
        console.log(`socket connected: ${socket.id}`);
        socket.on("disconnect", (reason) => {
            console.log(`socket disconnected: ${socket.id}, reason: ${reason}`);
        });
    });
    return io;
}
//code explanation
// In this code, we are importing the Server class from the socket.io library and the createRedisAdapter function from our redisAdapter.ts file. We also import the http module to create an HTTP server.
// We create an HTTP server using http.createServer() and then create a Socket.IO server instance (io) by passing the HTTP server and CORS configuration to the Server constructor. The CORS configuration allows requests from http://localhost:3000 with GET and POST methods.
// We then call the createRedisAdapter function to get the Redis adapter and set it as the adapter for our Socket.IO server using io.adapter(). This allows our Socket.IO server to use Redis Pub/Sub for sharing messages between different instances of the server.
// Now you can start the HTTP server and the Socket.IO server will be ready to handle real-time communication with Redis Pub/Sub shared across instances.
// we will use express to create a simple HTTP server and then integrate the Socket.IO server with it. This will allow us to have both HTTP and WebSocket communication in our application. We will also set up a health check endpoint to verify that the server is running properly.
//in the entry point of our application (index.ts), we will import the startSocketServer function from the sockets/index.ts file and call it to start the Socket.IO server with Redis Pub/Sub shared. We will also set up the HTTP server using express and listen on a specific port for incoming requests.
