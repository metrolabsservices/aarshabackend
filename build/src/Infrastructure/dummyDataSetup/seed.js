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
const client_1 = require("@prisma/client");
const deleteEverything_1 = require("./deleteEverything");
const questionBank_1 = require("./questionBank");
const studentDeatils_1 = require("./studentDeatils");
const optionsMasterSeed_1 = require("./optionsMasterSeed");
const tansactionSeed_1 = require("./tansactionSeed");
const loginSeedData_1 = require("./loginSeedData");
const feechargeSeed_1 = require("./feechargeSeed");
const feepaidSeed_1 = require("./feepaidSeed");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, deleteEverything_1.deleteEverything)();
        const loginRegister = yield prisma.loginRegister.createMany({
            data: loginSeedData_1.loginDetails,
        });
        const questionsCreate = yield prisma.questions.createMany({
            data: questionBank_1.questions,
        });
        const studentCreate = yield prisma.student.createMany({
            data: studentDeatils_1.studentData,
        });
        const studentFeeDetails = yield prisma.feeDetail.createMany({
            data: feepaidSeed_1.feePaidDetails,
        });
        const studentFeeCharges = yield prisma.feeCharge.createMany({
            data: feechargeSeed_1.feeChargeDetails,
        });
        const studentsubjectStatics = yield prisma.subjectStatistics.createMany({
            data: studentDeatils_1.subjectStatics,
        });
        const optionsMaster = yield prisma.optionsMaster.create({
            data: optionsMasterSeed_1.optionsMasterData,
        });
        const transactionCreate = yield prisma.transactionsList.createMany({
            data: tansactionSeed_1.transactionList,
        });
        console.log(`
  ${loginRegister} records of login register created.\n
  ${optionsMaster} records of Selectors created.\n
  ${transactionCreate.count} records of Transaction details created.\n
  ${questionsCreate.count} records of Questions created.\n
  ${studentCreate.count} records of Student created.\n
  ${studentFeeDetails.count} records of Student Fee details created.\n
  ${studentFeeCharges.count} records of Student Fee Charges created.\n
  ${studentsubjectStatics.count} records of Student Subject details created.\n
  `);
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error("------------------------", e);
    yield prisma.$disconnect();
    process.exit(1);
}));
