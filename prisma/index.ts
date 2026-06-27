import "dotenv/config";
import express from "express";
import { PrismaClient } from "./generated/prisma/client.ts";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const app = express();

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error("DATABASE_URL is not set");
  process.exit(1);
}

const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

app.get("/", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`; // Test connection
    res.send("Prisma is configured and connected to the database using PrismaPg adapter!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error connecting to the database.");
  }
});

try {
  await prisma.$connect();
  console.log("PostgreSQL (Prisma) connected successfully");

  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
} catch (error) {
  console.error("PostgreSQL connection error:", error);
  process.exit(1);
}