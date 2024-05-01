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
exports.StudentmanagementService = void 0;
const client_1 = require("@prisma/client");
const pageOptimization_1 = require("../HelpingFunctions/pageOptimization");
const filterOptimization_1 = require("../HelpingFunctions/filterOptimization");
const FilterOptimizations_1 = require("../HelpingFunctions/FilterOptimizations");
const objectCustomOptmization_1 = require("../HelpingFunctions/objectCustomOptmization");
class StudentmanagementService {
    getStudentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const getById = () => __awaiter(this, void 0, void 0, function* () {
                const studentDeatilsById = yield prisma.student.findUnique({
                    where: {
                        id: id,
                    },
                    include: {
                        feeDetails: true,
                        subjectStatistics: true,
                    },
                });
                return studentDeatilsById;
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
                return new Error("Error retrieving student details");
            })
                .finally(() => __awaiter(this, void 0, void 0, function* () {
                yield prisma.$disconnect();
            }));
        });
    }
    getAllStudents(pageInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            var filterSet = (0, filterOptimization_1.filterOptimization)(pageInfo.Filters);
            var paginationSet = (0, pageOptimization_1.paginationOptimization)(pageInfo.Pagination);
            const getAll = () => __awaiter(this, void 0, void 0, function* () {
                const studentDeatilsAll = yield prisma.student.findMany(Object.assign(Object.assign({ where: Object.assign({}, filterSet.where) }, paginationSet), { orderBy: {
                        joiningDate: "desc",
                    }, include: {
                        feeCharge: true,
                        feeDetails: true,
                        subjectStatistics: true,
                    } }));
                return studentDeatilsAll;
            });
            return getAll()
                .then((result) => __awaiter(this, void 0, void 0, function* () {
                console.log("output of Query -- ", result);
                let count = 0;
                if (filterSet.res) {
                    let x = yield prisma.student.findMany({
                        where: Object.assign({}, filterSet.where),
                    });
                    count = x.length;
                }
                else {
                    count = yield prisma.student.count();
                }
                return { items: result, totalCount: count };
            }))
                .catch((e) => {
                console.error(e);
                return new Error("Error retrieving student details");
            })
                .finally(() => __awaiter(this, void 0, void 0, function* () {
                yield prisma.$disconnect();
            }));
        });
    }
    getAllStudentsFeeData(PageData, Filters) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const filterValues = yield (0, FilterOptimizations_1.feeFilter)(Filters);
            const pageValues = (0, pageOptimization_1.paginationNewOptimizaation)(PageData);
            const getAll = () => __awaiter(this, void 0, void 0, function* () {
                console.log(Filters, "++++", PageData);
                const studentDeatilsAll = yield prisma.student.findMany(Object.assign(Object.assign({ where: Object.assign({}, filterValues.where) }, pageValues), { orderBy: {
                        id: "desc",
                    }, select: {
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
                    } }));
                return studentDeatilsAll;
            });
            return getAll()
                .then((result) => __awaiter(this, void 0, void 0, function* () {
                // console.log("output of Query -- ", result, result.length);
                const filteredCount = yield prisma.student.findMany({
                    where: Object.assign({}, filterValues.where),
                });
                const count = filterValues.res
                    ? filteredCount.length
                    : yield prisma.student.count();
                // const pageResp = filterValues.res ? {current: 1, pageSize: };
                return { items: result, totalCount: count };
            }))
                .catch((e) => {
                console.error(e);
                return new Error("Error retrieving student details");
            })
                .finally(() => __awaiter(this, void 0, void 0, function* () {
                yield prisma.$disconnect();
            }));
        });
    }
    getAllByName(searchName) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const getAll = () => __awaiter(this, void 0, void 0, function* () {
                const studentDeatilsAll = yield prisma.student.findMany({
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
            });
            return getAll()
                .then((result) => __awaiter(this, void 0, void 0, function* () {
                // const count = await prisma.student.count();
                return result;
            }))
                .catch((e) => {
                console.error(e);
                return new Error("Error retrieving student details");
            })
                .finally(() => __awaiter(this, void 0, void 0, function* () {
                yield prisma.$disconnect();
            }));
        });
    }
    createStudent(pack) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const createPerson = () => __awaiter(this, void 0, void 0, function* () {
                const createStudent = yield prisma.student.create({
                    data: pack,
                });
                return createStudent;
            });
            return createPerson()
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
    updateStudentById(id, pack) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const updateById = () => __awaiter(this, void 0, void 0, function* () {
                const studentDetailsById = yield prisma.student.update({
                    where: {
                        id: id,
                    },
                    data: pack,
                });
                return studentDetailsById;
            });
            return updateById()
                .then((result) => {
                console.log(result);
                return "Record Updated Successfully";
            })
                .catch((e) => {
                console.error(e);
                return new Error("Error retrieving student details");
            })
                .finally(() => __awaiter(this, void 0, void 0, function* () {
                yield prisma.$disconnect();
            }));
        });
    }
    deleteStudentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const deleteById = () => __awaiter(this, void 0, void 0, function* () {
                const secondTable = yield prisma.feeDetail.deleteMany({
                    where: {
                        studentId: id,
                    },
                });
                const thirdTable = yield prisma.subjectStatistics.deleteMany({
                    where: {
                        studentId: id,
                    },
                });
                const studentDetailsById = yield prisma.student.delete({
                    where: {
                        id: id,
                    },
                });
                console.log(studentDetailsById, secondTable, thirdTable);
                return studentDetailsById;
            });
            return deleteById()
                .then((result) => {
                console.log(result);
                return "Record Deleted Successfully";
            })
                .catch((e) => {
                var _a;
                console.error(e);
                return new Error((_a = e.meta) === null || _a === void 0 ? void 0 : _a.cause);
            })
                .finally(() => __awaiter(this, void 0, void 0, function* () {
                yield prisma.$disconnect();
            }));
        });
    }
    studentFeePayByID(pack) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const addFeeById = () => __awaiter(this, void 0, void 0, function* () {
                const feeAdd = yield prisma.feeDetail.create({
                    data: Object.assign({}, pack.data),
                });
                const transactionAddon = yield prisma.transactionsList.create({
                    data: {
                        itemName: `Tution Fee Payment - Fee ID( ${feeAdd.id} )`,
                        description: `${pack.info.name} with student ID( ${pack.info.id} ) Fee Paid`,
                        category: "Student Fee",
                        dateOfPayment: pack.data.dateOfPaid,
                        amount: pack.data.paidAmount,
                        modeOfPayment: pack.info.modeOfPayment,
                        transactionMode: "Credit",
                    },
                });
                const studentDetailsById = yield prisma.student.update({
                    where: {
                        id: pack.info.id,
                    },
                    data: {
                        subjectsTaken: pack.data.subjectsTaken,
                        dueAmount: pack.info.dueAmount,
                    },
                });
                return { feeAdd, transactionAddon, studentDetailsById };
                // return feeAdd;
            });
            return addFeeById()
                .then((result) => __awaiter(this, void 0, void 0, function* () {
                console.log("---------", result, "-----------");
                return yield (0, objectCustomOptmization_1.CustomObjectOptimize)(result);
            }))
                .catch((e) => {
                console.error(e);
                return new Error("Enable to Enroll Fee Data");
            })
                .finally(() => __awaiter(this, void 0, void 0, function* () {
                yield prisma.$disconnect();
            }));
        });
    }
}
exports.StudentmanagementService = StudentmanagementService;
