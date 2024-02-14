import { PrismaClient } from "@prisma/client";
import { deleteEverything } from "./deleteEverything";
import { questions } from "./questionBank";
import { feeData, studentData, subjectStatics } from "./studentDeatils";
import { optionsMasterData } from "./optionsMasterSeed";
import { transactionList } from "./tansactionSeed";
const prisma = new PrismaClient();

async function main() {
  await deleteEverything();
  const questionsCreate = await prisma.questions.createMany({
    data: questions,
  });
  const studentCreate = await prisma.student.createMany({
    data: studentData,
  });
  const studentFeeDetails = await prisma.feeDetail.createMany({
    data: feeData,
  });
  const studentsubjectStatics = await prisma.subjectStatistics.createMany({
    data: subjectStatics,
  });
  const optionsMaster = await prisma.optionsMaster.create({
    data: optionsMasterData,
  });
  const transactionCreate = await prisma.transactionsList.createMany({
    data: transactionList,
  });

  console.log(`
  ${{ optionsMaster }} records of Selectors created.\n
  ${transactionCreate.count} records of Transaction details created.\n
  ${questionsCreate.count} records of Questions created.\n
  ${studentCreate.count} records of Student created.\n
  ${studentFeeDetails.count} records of Student Fee details created.\n
  ${studentsubjectStatics.count} records of Student Subject details created.\n
  `);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("------------------------", e);
    await prisma.$disconnect();
    process.exit(1);
  });
