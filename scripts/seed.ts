import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Your seeding logic here

async function main() {
  // Example seeding logic
  await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });