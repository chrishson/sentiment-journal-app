const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

type Post = {
  content: string;
  title: string;
  sentimentScore: number;
  sentimentMagnitude: number;
};

const postData: Post[] = [
  {
    content: "Wow what an app!",
    title: "Cool Bro!",
    sentimentScore: 0.9,
    sentimentMagnitude: 0.9,
  },
  {
    content: "These couldn't be any worse... I wish things were better.",
    title: "Things are going horribly",
    sentimentScore: -0.8,
    sentimentMagnitude: 1.6,
  },
  {
    content: "Wow! This is looking pretty good!",
    title: "The first of many",
    sentimentScore: 0.9,
    sentimentMagnitude: 1.9,
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const p of postData) {
    const post = await prisma.post.create({
      data: p,
    });
    console.log(`Created post with id: ${post.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
