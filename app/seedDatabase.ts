import prisma from "./prismaClient";
import bcrypt from "bcryptjs";

export async function seedDatabase() {
  const username = process.env.SEED_USERNAME;
  const password = process.env.SEED_PASSWORD;

  if (!username || !password) {
    throw new Error(
      "SEED_USERNAME and SEED_PASSWORD must be set in the environment variables"
    );
  }

  const existingUser = await prisma.user.findUnique({
    where: { username },
  });

  if (!existingUser) {
    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });
    console.log("Database seeded with initial user");
  } else {
    console.log("Initial user already exists");
  }
}
