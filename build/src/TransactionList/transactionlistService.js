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
const pageOptimization_1 = require("../HelpingFunctions/pageOptimization");
const FilterOptimizations_1 = require("../HelpingFunctions/FilterOptimizations");
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
    getAllTransactions(Filters, PageData) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const pageValues = (0, pageOptimization_1.paginationNewOptimizaation)(PageData);
            const FilterData = yield (0, FilterOptimizations_1.trxFilter)(Filters);
            const getAll = () => __awaiter(this, void 0, void 0, function* () {
                const transactionDeatilsAll = yield prisma.transactionsList.findMany(Object.assign(Object.assign(Object.assign({}, FilterData.data), pageValues), { orderBy: {
                        dateOfPayment: "desc",
                    } }));
                return transactionDeatilsAll;
            });
            return getAll()
                .then((result) => __awaiter(this, void 0, void 0, function* () {
                // console.log("output of Query -- ", result);
                const filteredCount = yield prisma.transactionsList.findMany(Object.assign({}, FilterData.data));
                const count = FilterData.status
                    ? filteredCount.length
                    : yield prisma.transactionsList.count();
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
    getPaiChartData(pack) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const transactiondata = () => __awaiter(this, void 0, void 0, function* () {
                const startDate = pack.from;
                const endDate = pack.to;
                const transactionList = yield prisma.transactionsList.findMany({
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
                const modifiedResult = (transactions) => {
                    const categoryMap = {};
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
                        }
                        else if (transactionMode === "Debit") {
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
            });
            return transactiondata()
                .then((result) => {
                return result;
            })
                .catch((e) => {
                console.error(e);
                return new Error("Failed to retrieve transaction data");
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
                if (result.count == 1) {
                    return "Record Deleted Successfully";
                }
                return Error("Record Not Available to delete");
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
