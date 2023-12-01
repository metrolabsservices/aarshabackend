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
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, deleteEverything_1.deleteEverything)();
        const questionsCreate = yield prisma.questions.createMany({
            data: questionBank_1.questions,
        });
        // console.log(`${questionsCreate.count} records of Questions created.\n`);
        return questionsCreate;
    });
}
main()
    .then((x) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(x.count);
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error("------------------------", e);
    yield prisma.$disconnect();
    process.exit(1);
}));
