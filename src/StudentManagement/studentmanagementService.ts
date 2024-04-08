import { PrismaClient, Student } from "@prisma/client";
import {
  ServiceResponse,
  studentCreateInterface,
  studentUpdateInterface,
} from "../Interfaces/studentsInterface";
import { PageInfo, PageResponse } from "../Interfaces/PageInfo";
import {
  paginationNewOptimizaation,
  paginationOptimization,
} from "../HelpingFunctions/pageOptimization";
import { filterOptimization } from "../HelpingFunctions/filterOptimization";
import { feeFilter } from "../HelpingFunctions/FilterOptimizations";

export class StudentmanagementService {
  public async getStudentById(id: number): Promise<Student | Error> {
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
  ): Promise<PageResponse<Student> | Error> {
    const prisma = new PrismaClient();
    var filterSet = filterOptimization(pageInfo.Filters);
    var paginationSet = paginationOptimization(pageInfo.Pagination);
    const getAll = async () => {
      const studentDeatilsAll = await prisma.student.findMany({
        where: { ...filterSet.where },
        ...paginationSet,
        orderBy: {
          joiningDate: "desc",
        },
        include: {
          feeCharge: true,
          feeDetails: true,
          subjectStatistics: true,
        },
      });

      return studentDeatilsAll;
    };
    return getAll()
      .then(async (result) => {
        console.log("output of Query -- ", result);
        let count = 0;
        if (filterSet.res) {
          let x = await prisma.student.findMany({
            where: { ...filterSet.where },
          });
          count = x.length;
        } else {
          count = await prisma.student.count();
        }
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

  public async getAllStudentsFeeData(
    PageData?: any[],
    Filters?: any
  ): Promise<Error | any> {
    const prisma = new PrismaClient();
    const filterValues = await feeFilter(Filters);
    const pageValues = paginationNewOptimizaation(PageData, filterValues.res);
    const getAll = async () => {
      console.log(Filters, "++++", PageData);
      const studentDeatilsAll = await prisma.student.findMany({
        where: { ...filterValues.where },
        ...pageValues,
        orderBy: {
          id: "desc",
        },

        select: {
          id: true,
          name: true,
          parentName: true,
          feeCharge: {
            select: { id: true, amount: true, dateOfCharged: true },
          },
          feeDetails: {
            select: {
              id: true,
              paidAmount: true,
              subjectsTaken: true,
              dateOfPaid: true,
            },
          },
        },
      });
      return studentDeatilsAll;
    };
    return getAll()
      .then(async (result) => {
        // console.log("output of Query -- ", result, result.length);
        const filteredCount = await prisma.student.findMany({
          where: { ...filterValues.where },
        });
        const count = filterValues.res
          ? filteredCount.length
          : await prisma.student.count();
        // const pageResp = filterValues.res ? {current: 1, pageSize: };
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
          AND: [
            {
              isDeleted: false,
            },
          ],
          OR: [
            {
              name: {
                contains: searchName,
                mode: "insensitive",
              },
            },
            {
              parentName: {
                contains: searchName,
                mode: "insensitive",
              },
            },
          ],
        },
        take: 5,
        skip: 0,
        select: {
          id: true,
          name: true,
          classNo: true,
          parentName: true,
          parentPhnNo: true,
          dueAmount: true,
          feeCharge: {
            select: {
              amount: true,
              dateOfCharged: true,
            },
          },
          feeDetails: {
            select: {
              paidAmount: true,
              dateOfPaid: true,
            },
          },
        },
      });
      return studentDeatilsAll;
    };
    return getAll()
      .then(async (result) => {
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
