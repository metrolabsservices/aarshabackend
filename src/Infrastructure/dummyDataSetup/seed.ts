import { PrismaClient } from "@prisma/client";
import { deleteEverything } from "./deleteEverything";
import { questions } from "./questionBank";
import { feeData, studentData, subjectStatics } from "./studentDeatils";
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

  console.log(`
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
