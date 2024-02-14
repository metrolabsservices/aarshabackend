import { PrismaClient } from "@prisma/client";
export const deleteEverything = async () => {
  const prisma = new PrismaClient();
  const deleteList = [
    "of Selector Options deleted",
    "of Subject Stats deleted",
    "of Questions deleted",
    "of Fee Details deleted",
    "of Students deleted",
  ];
  const optionsMaster = prisma.optionsMaster.deleteMany();
  const transactionList = prisma.transactionsList.deleteMany();
  const studentLinkedSubjectStatics = prisma.subjectStatistics.deleteMany();
  const studentLinkedFeedetails = prisma.feeDetail.deleteMany();
  const questionsDelete = prisma.questions.deleteMany();
  const studentUnlinkedData = prisma.student.deleteMany();
  const deletedData = await prisma.$transaction([
    optionsMaster,
    transactionList,
    studentLinkedSubjectStatics,
    questionsDelete,
    studentLinkedFeedetails,
    studentUnlinkedData,
  ]);

  deletedData.map((i: any, j: any) => {
    console.log(i.count, deleteList[j]);
  });

  return deletedData;
};
