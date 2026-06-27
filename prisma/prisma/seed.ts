import { PrismaClient } from '../generated/prisma/client';


async function main() {
    const prisma = new PrismaClient();
    await prisma.user.create({
        data: {
            name: "John Doe",
            email: "[EMAIL_ADDRESS]",
        },
    });
}

main();