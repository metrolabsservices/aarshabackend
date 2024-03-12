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
            const getAll = () => __awaiter(this, void 0, void 0, function* () {
                var pagination = (0, pageOptimization_1.paginationOptimization)(pageInfo.Pagination);
                var filterSet = (0, filterOptimization_1.filterOptimization)(pageInfo.Filters);
                const studentDeatilsAll = yield prisma.student.findMany(Object.assign(Object.assign(Object.assign({}, filterSet), pagination), { orderBy: {
                        joiningDate: "desc",
                    }, include: {
                        feeDetails: true,
                        subjectStatistics: true,
                    } }));
                return studentDeatilsAll;
            });
            return getAll()
                .then((result) => __awaiter(this, void 0, void 0, function* () {
                // console.log("output of Query -- ", result);
                if (result.length === 0) {
                    return new Error("Data Not Found");
                }
                const count = yield prisma.student.count();
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
                });
                return studentDeatilsAll;
            });
            return getAll()
                .then((result) => __awaiter(this, void 0, void 0, function* () {
                // console.log("output of Query -- ", result);
                if (result.length === 0) {
                    return new Error("Data Not Found");
                }
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
}
exports.StudentmanagementService = StudentmanagementService;
