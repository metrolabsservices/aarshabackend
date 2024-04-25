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
exports.CustomObjectOptimize = void 0;
const to_words_1 = require("to-words");
const CustomObjectOptimize = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const toWords = new to_words_1.ToWords();
    let words = toWords.convert(data.feeAdd.paidAmount, {
        currency: true,
        ignoreDecimal: true,
    });
    let subject = data.studentDetailsById.subjectsTaken;
    subject = subject.join(", ");
    return {
        "1": String(data.feeAdd.id),
        "2": String(data.transactionAddon.id),
        "3": data.transactionAddon.dateOfPayment,
        "4": data.studentDetailsById.name,
        "5": data.studentDetailsById.classNo,
        "6": data.studentDetailsById.timing + "Hrs",
        "7": subject,
        "8": words,
        "9": "Rs " + String(data.feeAdd.paidAmount) + "/-",
        "10": data.studentDetailsById.dueAmount == 0
            ? "No dues outstanding. All payments up to date "
            : String(data.studentDetailsById.dueAmount),
    };
});
exports.CustomObjectOptimize = CustomObjectOptimize;
//  fee id, trx id, date, stu name, clss, time, subj, fee paid word, paid , balace
