import { PrismaClient } from "@prisma/client";

console.log("Initializing Prisma Client");
console.log("MONGODB_URI:", process.env.MONGODB_URI);

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.MONGODB_URI,
    },
  },
});

export default prisma;
