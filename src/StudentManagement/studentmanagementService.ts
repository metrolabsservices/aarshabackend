import { PrismaClient } from "@prisma/client";
import {
  ServiceResponse,
  studentCreateInterface,
  studentInterface,
  studentUpdateInterface,
} from "../Interfaces/studentsInterface";
import { PageInfo, PageResponse } from "../Interfaces/PageInfo";
import { paginationOptimization } from "../HelpingFunctions/pageOptimization";
import { filterOptimization } from "../HelpingFunctions/filterOptimization";

export class StudentmanagementService {
  public async getStudentById(id: number): Promise<studentInterface | Error> {
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
      .then((result) => {
        if (!result) {
          return new Error("Data Not Found");
        }
        return result;
      })
      .catch((e) => {
        console.error(e);
        return new Error("Error retrieving student details");
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  }

  public async getAllStudents(
    pageInfo: PageInfo
  ): Promise<PageResponse<studentInterface> | Error> {
    const prisma = new PrismaClient();
    const getAll = async () => {
      var pagination = paginationOptimization(pageInfo.Pagination);
      var filterSet = filterOptimization(pageInfo.Filters);
      const studentDeatilsAll = await prisma.student.findMany({
        ...filterSet,
        ...pagination,
        orderBy: {
          joiningDate: "desc",
        },
        include: {
          feeDetails: true,
          subjectStatistics: true,
        },
      });
      return studentDeatilsAll;
    };
    return getAll()
      .then(async (result) => {
        // console.log("output of Query -- ", result);
        if (result.length === 0) {
          return new Error("Data Not Found");
        }
        const count = await prisma.student.count();
        return { items: result, totalCount: count };
      })
      .catch((e) => {
        console.error(e);
        return new Error("Error retrieving student details");
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  }

  public async getAllByName(searchName: string): Promise<any | Error> {
    const prisma = new PrismaClient();
    const getAll = async () => {
      const studentDeatilsAll = await prisma.student.findMany({
        where: {
          OR: [
            {
              name: {
                contains: searchName,
                mode: "insensitive",
              },
            },
            {
              guardianName: {
                contains: searchName,
                mode: "insensitive",
              },
            },
          ],
        },

        select: {
          id: true,
          name: true,
          guardianName: true,
          guardianPhoneNumber: true,
          feeDetails: true,
          feeCharge: true,
        },
      });
      return studentDeatilsAll;
    };
    return getAll()
      .then(async (result) => {
        // console.log("output of Query -- ", result);
        if (result.length === 0) {
          return new Error("Data Not Found");
        }
        // const count = await prisma.student.count();
        return result;
      })
      .catch((e) => {
        console.error(e);
        return new Error("Error retrieving student details");
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  }

  public async createStudent(
    pack: studentCreateInterface
  ): Promise<Error | ServiceResponse> {
    const prisma = new PrismaClient();
    const createPerson = async () => {
      const createStudent = await prisma.student.create({
        data: pack,
      });
      return createStudent;
    };
    return createPerson()
      .then((result) => {
        console.log(result);
        return { response: "Record Created Successfully", data: result.id };
      })
      .catch((e) => {
        console.error(e);
        return new Error("Failed to create Student");
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  }

  public async updateStudentById(
    id: number,
    pack: studentUpdateInterface
  ): Promise<String | Error> {
    const prisma = new PrismaClient();
    const updateById = async () => {
      const studentDetailsById = await prisma.student.update({
        where: {
          id: id,
        },
        data: pack,
      });
      return studentDetailsById;
    };

    return updateById()
      .then((result) => {
        console.log(result);
        return "Record Updated Successfully";
      })
      .catch((e) => {
        console.error(e);
        return new Error("Error retrieving student details");
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  }

  public async deleteStudentById(id: number): Promise<String | Error> {
    const prisma = new PrismaClient();
    const deleteById = async () => {
      const secondTable = await prisma.feeDetail.deleteMany({
        where: {
          studentId: id,
        },
      });
      const thirdTable = await prisma.subjectStatistics.deleteMany({
        where: {
          studentId: id,
        },
      });
      const studentDetailsById = await prisma.student.delete({
        where: {
          id: id,
        },
      });
      console.log(studentDetailsById, secondTable, thirdTable);
      return studentDetailsById;
    };
    return deleteById()
      .then((result) => {
        console.log(result);
        return "Record Deleted Successfully";
      })
      .catch((e) => {
        console.error(e);
        return new Error(e.meta?.cause);
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  }
}
