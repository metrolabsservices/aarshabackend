import { PrismaClient } from "@prisma/client";
import { deleteEverything } from "./deleteEverything";
import { questions } from "./questionBank";
import { studentData, subjectStatics } from "./studentDeatils";
import { optionsMasterData } from "./optionsMasterSeed";
import { transactionList } from "./tansactionSeed";
import { loginDetails } from "./loginSeedData";
import { feeChargeDetails } from "./feechargeSeed";
import { feePaidDetails } from "./feepaidSeed";
const prisma = new PrismaClient();

async function main() {
  await deleteEverything();
  const loginRegister = await prisma.loginRegister.createMany({
    data: loginDetails,
  });
  const questionsCreate = await prisma.questions.createMany({
    data: questions,
  });
  const studentCreate = await prisma.student.createMany({
    data: studentData,
  });
  const studentFeeDetails = await prisma.feeDetail.createMany({
    data: feePaidDetails,
  });
  const studentFeeCharges = await prisma.feeCharge.createMany({
    data: feeChargeDetails,
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
  ${loginRegister} records of login register created.\n
  ${optionsMaster} records of Selectors created.\n
  ${transactionCreate.count} records of Transaction details created.\n
  ${questionsCreate.count} records of Questions created.\n
  ${studentCreate.count} records of Student created.\n
  ${studentFeeDetails.count} records of Student Fee details created.\n
  ${studentFeeCharges.count} records of Student Fee Charges created.\n
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
