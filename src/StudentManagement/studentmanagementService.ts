import { PrismaClient } from "@prisma/client";

export class StudentmanagementService {
  public async getStudentById(id: number): Promise<any | void> {
    const prisma = new PrismaClient();
    const getById = async () => {
      const studentDeatilsById = await prisma.student.findUnique({
        where: {
          id: id,
        },
        include: {
          feeDetails: true,
          subjectStatistics: true,
        },
      });
      return studentDeatilsById;
    };
    return getById()
      .then(async (result) => {
        console.log(result);
        await prisma.$disconnect();
        return result;
      })
      .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
      });
  }
}
