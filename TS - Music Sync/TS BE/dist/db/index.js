import { PrismaClient } from "@prisma/client";
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    console.error("connectionString required");
    process.exit(1);
}
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
export const connect = async () => {
    try {
        await prisma.$connect();
        console.log(`connected to prisma postgres`);
    }
    catch (err) {
        console.error('failed to connect prisma');
        process.exit(1);
    }
};
export { prisma };
