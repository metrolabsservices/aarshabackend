"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionsMasterData = void 0;
exports.optionsMasterData = {
    boardTypes: ["ICSE", "CBSE", "SSC"],
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
    studentStatusTypes: ["away", "active", "in-active"],
    gradeTypes: Array.from({ length: 10 }, (_, index) => "Class-" + String(index + 1)),
    paymentTypes: [
        "Card",
        "Cash",
        "Phone Pay",
        "Google Pay",
        "Paytm",
        "Cred",
        "Bank Transfer",
    ],
    transactionsCategoryTypes: [
        { category: "Library Membership", transactionType: "credit" },
        { category: "Stationary Parchase", transactionType: "debit" },
        { category: "Stationary Sale", transactionType: "credit" },
        { category: "Salaries", transactionType: "debit" },
        { category: "Rent", transactionType: "debit" },
        { category: "Student Fee", transactionType: "credit" },
        { category: "Electricity", transactionType: "debit" },
        { category: "Water", transactionType: "debit" },
        { category: "Maintenance", transactionType: "debit" },
    ],
    transactionTypes: [
        "Pending",
        "Processing",
        "Completed",
        "Failed",
        "Refunded",
        "Cancelled",
        "On Hold",
        "Reversed",
        "Pending Review",
    ],
};
