const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.$queryRaw`SELECT 1+1 AS result`;
    console.log("Prisma connected successfully", result);
  } catch (e) {
    console.error("Prisma connection failed", e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
