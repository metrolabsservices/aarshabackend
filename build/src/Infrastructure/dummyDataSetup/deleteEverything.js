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
exports.deleteEverything = void 0;
const client_1 = require("@prisma/client");
const deleteEverything = () => __awaiter(void 0, void 0, void 0, function* () {
    const prisma = new client_1.PrismaClient();
    const deleteList = [
        "of Selector Options deleted",
        "of Subject Stats deleted",
        "of Questions deleted",
        "of Fee Details deleted",
        "of Students deleted",
    ];
    const optionsMaster = prisma.optionsMaster.deleteMany();
    const studentLinkedSubjectStatics = prisma.subjectStatistics.deleteMany();
    const studentLinkedFeedetails = prisma.feeDetail.deleteMany();
    const questionsDelete = prisma.questions.deleteMany();
    const studentUnlinkedData = prisma.student.deleteMany();
    const deletedData = yield prisma.$transaction([
        optionsMaster,
        studentLinkedSubjectStatics,
        questionsDelete,
        studentLinkedFeedetails,
        studentUnlinkedData,
    ]);
    deletedData.map((i, j) => {
        console.log(i.count, deleteList[j]);
    });
    return deletedData;
});
exports.deleteEverything = deleteEverything;
