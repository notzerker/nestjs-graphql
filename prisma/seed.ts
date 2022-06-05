import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.listing.deleteMany();
  const test = await prisma.listing.create({
    data: {
      signer: '0xaFfdC243caf9D7Df46ba9279fC46499513Fe7B6d',
      collection: '0xED5AF388653567Af2F388E6224dC7C4b3241C544',
      tokenId: 1,
      price: 10,
      nonce: 1,
      startTime: 1654388463,
      endTime: 1654398463,
    },
  });

  console.log({ test });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
