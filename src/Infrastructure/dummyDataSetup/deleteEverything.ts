import { PrismaClient } from "@prisma/client";
export const deleteEverything = async () => {
  const prisma = new PrismaClient();
  const deleteList = [
    "of Questions deleted",
    "of Fee Details deleted",
    "of Students deleted",
  ];
  const studentLinkedSubjectStatics = prisma.subjectStatistics.deleteMany();
  const studentLinkedFeedetails = prisma.feeDetail.deleteMany();
  const questionsDelete = prisma.questions.deleteMany();
  const studentUnlinkedData = prisma.student.deleteMany();
  const deletedData = await prisma.$transaction([
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
