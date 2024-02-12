"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionsMasterData = void 0;
exports.optionsMasterData = {
    boardTypes: ["ICSE", "CBSE", "SSC", "OTHERS"],
    subjectTypes: [
        "Telugu",
        "Hindi",
        "English",
        "Maths",
        "Physics",
        "Chemistry",
        "Biology",
        "Social",
    ],
    studentStatusTypes: ["AWAY", "REGULAR", "IN-ACTIVE", "OTHERS"],
    gradeTypes: Array.from({ length: 10 }, (_, index) => "Class-" + String(index + 1)),
    paymentTypes: [
        "CARD",
        "CASH",
        "PHONE_PAY",
        "GOOGLE_PAY",
        "PAYTM",
        "CRED",
        "BANK_TRANSFER",
    ],
    transactionsCategoryTypes: [
        { category: "Library Membership", transactionType: "credit" },
        { category: "Stationary Parchase", transactionType: "debit" },
        { category: "Stationary Sale", transactionType: "credit" },
        { category: "Salaries", transactionType: "debit" },
        { category: "Rent", transactionType: "debit" },
        { category: "Student Fee", transactionType: "credit" },
        { category: "Library Membership", transactionType: "credit" },
        { category: "Library Membership", transactionType: "credit" },
    ],
    transactionTypes: [
        "Pending",
        "Processing",
        "Completed",
        "Failed",
        "Refunded",
        "Cancelled",
        "On_Hold",
        "Reversed",
        "Pending_Review",
    ],
};
