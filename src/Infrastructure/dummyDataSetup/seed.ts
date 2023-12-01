import { PrismaClient } from "@prisma/client";
import { deleteEverything } from "./deleteEverything";
import { questions } from "./questionBank";
const prisma = new PrismaClient();

async function main() {
  await deleteEverything();
  const questionsCreate = await prisma.questions.createMany({
    data: questions,
  });
  // console.log(`${questionsCreate.count} records of Questions created.\n`);
  return questionsCreate;
}
main()
  .then(async (x) => {
    console.log(x.count, "Questions created");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("------------------------", e);
    await prisma.$disconnect();
    process.exit(1);
  });
