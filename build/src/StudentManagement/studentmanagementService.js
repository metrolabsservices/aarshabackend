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
                .then((result) => __awaiter(this, void 0, void 0, function* () {
                console.log(result);
                yield prisma.$disconnect();
                return result;
            }))
                .catch((e) => __awaiter(this, void 0, void 0, function* () {
                console.error(e);
                yield prisma.$disconnect();
                process.exit(1);
            }));
        });
    }
}
exports.StudentmanagementService = StudentmanagementService;
