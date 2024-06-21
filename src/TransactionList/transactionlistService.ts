import { PrismaClient, TransactionsList } from "@prisma/client";

import { PageResponse } from "../Interfaces/PageInfo";
import {
  TransactionCategory,
  transactionlistInterface,
  transactionlistUpdateInterface,
} from "../Interfaces/transactionlistInterface";
import { ServiceResponse } from "../Interfaces/studentsInterface";
import { paginationNewOptimizaation } from "../HelpingFunctions/pageOptimization";
import { trxFilter } from "../HelpingFunctions/FilterOptimizations";

export class transactionlistService {
  public async getTransactionById(
    id: number
  ): Promise<TransactionsList | Error> {
    const prisma = new PrismaClient();
    const getById = async () => {
      const transactionDeatilsById = await prisma.transactionsList.findUnique({
        where: {
          id: id,
        },
      });
      return transactionDeatilsById;
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
        return new Error("Error retrieving transaction details");
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  }

  public async getAllTransactions(
    Filters?: any,
    PageData?: any
  ): Promise<PageResponse<TransactionsList> | Error> {
    const prisma = new PrismaClient();
    const pageValues = paginationNewOptimizaation(PageData);
    const FilterData = await trxFilter(Filters);

    const getAll = async () => {
      const transactionDeatilsAll = await prisma.transactionsList.findMany({
        ...FilterData.data,
        ...pageValues,
        orderBy: {
          dateOfPayment: "desc",
        },
      });
      return transactionDeatilsAll;
    };
    return getAll()
      .then(async (result) => {
        // console.log("output of Query -- ", result);

        const filteredCount = await prisma.transactionsList.findMany({
          ...FilterData.data,
        });
        const count = FilterData.status
          ? filteredCount.length
          : await prisma.transactionsList.count();
        return { items: result, totalCount: count };
      })
      .catch((e) => {
        console.error(e);
        return new Error("Error retrieving Transaction details");
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  }

  public async getPaiChartData(pack: {
    from: string;
    to: string;
  }): Promise<TransactionCategory[] | Error | any> {
    const prisma = new PrismaClient();

    const transactiondata = async () => {
      const startDate = pack.from;
      const endDate = pack.to;

      const transactionList = await prisma.transactionsList.findMany({
        where: {
          dateOfPayment: {
            gte: startDate,
            lte: endDate,
          },
        },
      });

      // console.log(
      //   "-------------------------\n \tlist of records filtered based on selected date range\n",
      //   transactionList,
      //   "\n----------------------------------------------"
      // );
      const modifiedResult = (transactions: TransactionsList[]) => {
        const categoryMap: any = {};
        const predefinedCategories = [
          "Tuition",
          "Stationery",
          "Activity",
          "Library",
          "Salaries",
          "Utilities",
          "Repairs",
          "Furniture",
          "Technology",
          "Events",
          "Others",
          "Refund",
        ];

        // Initialize the map with predefined categories and zero amounts
        predefinedCategories.forEach((category) => {
          categoryMap[category] = { credit: 0, debit: 0 };
        });

        // Process transactions and update the map
        transactions.forEach((transaction) => {
          const { category, amount, transactionMode } = transaction;
          if (transactionMode === "Credit") {
            categoryMap[category].credit += amount;
          } else if (transactionMode === "Debit") {
            categoryMap[category].debit += amount;
          }
        });

        // Convert the map to the desired array format
        return predefinedCategories.map((category) => ({
          category,
          credit: categoryMap[category].credit,
          debit: categoryMap[category].debit,
        }));
      };
      const result = modifiedResult(transactionList);
      return result;
    };

    return transactiondata()
      .then((result) => {
        return result;
      })
      .catch((e) => {
        console.error(e);
        return new Error("Failed to retrieve transaction data");
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  }

  public async createTransaction(
    pack: transactionlistInterface
  ): Promise<Error | ServiceResponse> {
    const prisma = new PrismaClient();
    const transactionCreate = async () => {
      const transactionAddon = await prisma.transactionsList.create({
        data: pack,
      });
      return transactionAddon;
    };
    return transactionCreate()
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

  public async updateTransactionById(
    id: number,
    pack: transactionlistUpdateInterface
  ): Promise<String | Error> {
    const prisma = new PrismaClient();
    const updateById = async () => {
      const transactionDetailsById = await prisma.transactionsList.update({
        where: {
          id: id,
        },
        data: pack,
      });
      return transactionDetailsById;
    };

    return updateById()
      .then((result) => {
        console.log(result);
        return "Record Updated Successfully";
      })
      .catch((e) => {
        console.error(e);
        return new Error("Error retrieving transaction details");
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  }

  public async deleteTransactionById(id: number): Promise<String | Error> {
    const prisma = new PrismaClient();
    const deleteById = async () => {
      const deleteTransaction = await prisma.transactionsList.deleteMany({
        where: {
          id: id,
        },
      });
      return deleteTransaction;
    };
    return deleteById()
      .then((result) => {
        console.log(result);
        if (result.count == 1) {
          return "Record Deleted Successfully";
        }
        return Error("Record Not Available to delete");
      })
      .catch((e) => {
        // console.error(e);
        return new Error(e.meta?.cause);
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  }
}
