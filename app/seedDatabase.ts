import prisma from "./prismaClient";
import bcrypt from "bcryptjs";

export async function seedDatabase() {
  const existingUser = await prisma.user.findUnique({
    where: { username: "ipgautomotive" },
  });

  if (!existingUser) {
    const hashedPassword = await bcrypt.hash("carmaker", 10);
    await prisma.user.create({
      data: {
        username: "ipgautomotive",
        password: hashedPassword,
      },
    });
    console.log("Database seeded with initial user");
  } else {
    console.log("Initial user already exists");
  }
}
