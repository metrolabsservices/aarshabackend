"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionlistService = void 0;
const client_1 = require("@prisma/client");
// import { transactionlistInterface } from "src/Interfaces/transactionlistInterface";
class transactionlistService {
    getTransactionById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const getById = () => __awaiter(this, void 0, void 0, function* () {
                const transactionDeatilsById = yield prisma.transactionsList.findUnique({
                    where: {
                        id: id,
                    },
                });
                return transactionDeatilsById;
            });
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
                .finally(() => __awaiter(this, void 0, void 0, function* () {
                yield prisma.$disconnect();
            }));
        });
    }
    getAllTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const getAll = () => __awaiter(this, void 0, void 0, function* () {
                //   var pagination = paginationOptimization(pageInfo.Pagination);
                //   var filterSet = filterOptimization(pageInfo.Filters);
                const transactionDeatilsAll = yield prisma.transactionsList.findMany({
                    // ...filterSet,
                    // ...pagination,
                    orderBy: {
                        dateOfPayment: "desc",
                    },
                });
                return transactionDeatilsAll;
            });
            return getAll()
                .then((result) => __awaiter(this, void 0, void 0, function* () {
                // console.log("output of Query -- ", result);
                if (result.length === 0) {
                    return new Error("Data Not Found");
                }
                const count = yield prisma.transactionsList.count();
                return { items: result, totalCount: count };
            }))
                .catch((e) => {
                console.error(e);
                return new Error("Error retrieving Transaction details");
            })
                .finally(() => __awaiter(this, void 0, void 0, function* () {
                yield prisma.$disconnect();
            }));
        });
    }
    createTransaction(pack) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const transactionCreate = () => __awaiter(this, void 0, void 0, function* () {
                const transactionAddon = yield prisma.transactionsList.create({
                    data: pack,
                });
                return transactionAddon;
            });
            return transactionCreate()
                .then((result) => {
                console.log(result);
                return { response: "Record Created Successfully", data: result.id };
            })
                .catch((e) => {
                console.error(e);
                return new Error("Failed to create Student");
            })
                .finally(() => __awaiter(this, void 0, void 0, function* () {
                yield prisma.$disconnect();
            }));
        });
    }
    updateTransactionById(id, pack) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const updateById = () => __awaiter(this, void 0, void 0, function* () {
                const transactionDetailsById = yield prisma.transactionsList.update({
                    where: {
                        id: id,
                    },
                    data: pack,
                });
                return transactionDetailsById;
            });
            return updateById()
                .then((result) => {
                console.log(result);
                return "Record Updated Successfully";
            })
                .catch((e) => {
                console.error(e);
                return new Error("Error retrieving transaction details");
            })
                .finally(() => __awaiter(this, void 0, void 0, function* () {
                yield prisma.$disconnect();
            }));
        });
    }
    deleteTransactionById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const deleteById = () => __awaiter(this, void 0, void 0, function* () {
                const deleteTransaction = yield prisma.transactionsList.deleteMany({
                    where: {
                        id: id,
                    },
                });
                return deleteTransaction;
            });
            return deleteById()
                .then((result) => {
                console.log(result);
                return "Record Deleted Successfully";
            })
                .catch((e) => {
                var _a;
                // console.error(e);
                return new Error((_a = e.meta) === null || _a === void 0 ? void 0 : _a.cause);
            })
                .finally(() => __awaiter(this, void 0, void 0, function* () {
                yield prisma.$disconnect();
            }));
        });
    }
}
exports.transactionlistService = transactionlistService;
