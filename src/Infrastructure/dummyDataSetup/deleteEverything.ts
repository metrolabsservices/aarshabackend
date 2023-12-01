import { PrismaClient } from "@prisma/client";
export const deleteEverything = async () => {
  const prisma = new PrismaClient();
  const questionsDelete = prisma.questions.deleteMany();
  const deletedData = await prisma.$transaction([questionsDelete]);
  var counter = 0;
  deletedData.map((i) => {
    counter = counter + i.count;
  });
  console.log(`\n\n${counter} Previous Records were DELETED\n`);
  return deletedData;
};
