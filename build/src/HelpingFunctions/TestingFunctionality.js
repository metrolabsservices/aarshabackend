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
exports.Testing = void 0;
const client_1 = require("@prisma/client");
const Testing = () => {
    const categories = [
        "Tuition",
        "Stationery",
        "Activity",
        "Library",
        "Donations",
        "Salaries",
        "Utilities",
        "Repairs",
        "Furniture",
        "Technology",
        "Marketing",
        "Events",
        "Others",
        "Refund",
    ];
    const prisma = new client_1.PrismaClient();
    function getPaiChartData(pack) {
        return __awaiter(this, void 0, void 0, function* () {
            const startDate = pack.from;
            const endDate = pack.to;
            const results = yield Promise.all(categories.map((category) => __awaiter(this, void 0, void 0, function* () {
                const creditSum = yield prisma.transactionsList.aggregate({
                    _sum: {
                        amount: true,
                    },
                    where: {
                        category,
                        transactionMode: "Credit",
                        dateOfPayment: {
                            gte: startDate,
                            lte: endDate,
                        },
                    },
                });
                const debitSum = yield prisma.transactionsList.aggregate({
                    _sum: {
                        amount: true,
                    },
                    where: {
                        category,
                        transactionMode: "Debit",
                        dateOfPayment: {
                            gte: startDate,
                            lte: endDate,
                        },
                    },
                });
                return {
                    category,
                    credit: creditSum._sum.amount || 0,
                    debit: debitSum._sum.amount || 0,
                };
            })));
            return results;
        });
    }
    // Example test cases
    const testCases = [
        {
            input: { from: "2023-02-01T00:00:00Z", to: "2023-02-28T23:59:59Z" },
            expectedOutput: [
                { category: "Tuition", credit: 1500, debit: 0 },
                { category: "Stationery", credit: 0, debit: 0 },
                { category: "Activity", credit: 0, debit: 0 },
                { category: "Library", credit: 0, debit: 0 },
                { category: "Donations", credit: 0, debit: 0 },
                { category: "Salaries", credit: 0, debit: 0 },
                { category: "Utilities", credit: 0, debit: 0 },
                { category: "Repairs", credit: 0, debit: 0 },
                { category: "Furniture", credit: 0, debit: 0 },
                { category: "Technology", credit: 0, debit: 0 },
                { category: "Marketing", credit: 0, debit: 0 },
                { category: "Events", credit: 0, debit: 0 },
                { category: "Others", credit: 0, debit: 0 },
                { category: "Refund", credit: 0, debit: 0 },
            ],
        },
        {
            input: { from: "2023-07-01T00:00:00Z", to: "2023-12-31T23:59:59Z" },
            expectedOutput: [
                { category: "Tuition", credit: 0, debit: 0 },
                { category: "Stationery", credit: 0, debit: 0 },
                { category: "Activity", credit: 0, debit: 0 },
                { category: "Library", credit: 0, debit: 0 },
                { category: "Donations", credit: 0, debit: 0 },
                { category: "Salaries", credit: 0, debit: 0 },
                { category: "Utilities", credit: 0, debit: 0 },
                { category: "Repairs", credit: 0, debit: 2500 },
                { category: "Furniture", credit: 0, debit: 0 },
                { category: "Technology", credit: 0, debit: 15000 },
                { category: "Marketing", credit: 0, debit: 2000 },
                { category: "Events", credit: 0, debit: 0 },
                { category: "Others", credit: 0, debit: 0 },
                { category: "Refund", credit: 0, debit: 0 },
            ],
        },
        {
            input: { from: "2024-01-01T00:00:00Z", to: "2024-12-31T23:59:59Z" },
            expectedOutput: [
                { category: "Tuition", credit: 0, debit: 0 },
                { category: "Stationery", credit: 0, debit: 0 },
                { category: "Activity", credit: 0, debit: 0 },
                { category: "Library", credit: 0, debit: 0 },
                { category: "Donations", credit: 0, debit: 0 },
                { category: "Salaries", credit: 0, debit: 0 },
                { category: "Utilities", credit: 0, debit: 0 },
                { category: "Repairs", credit: 0, debit: 0 },
                { category: "Furniture", credit: 0, debit: 0 },
                { category: "Technology", credit: 0, debit: 0 },
                { category: "Marketing", credit: 0, debit: 0 },
                { category: "Events", credit: 0, debit: 0 },
                { category: "Others", credit: 0, debit: 0 },
                { category: "Refund", credit: 0, debit: 0 },
            ],
        },
        {
            input: { from: "2022-01-01T00:00:00Z", to: "2022-12-31T23:59:59Z" },
            expectedOutput: [
                { category: "Tuition", credit: 0, debit: 0 },
                { category: "Stationery", credit: 0, debit: 0 },
                { category: "Activity", credit: 0, debit: 0 },
                { category: "Library", credit: 0, debit: 0 },
                { category: "Donations", credit: 0, debit: 0 },
                { category: "Salaries", credit: 0, debit: 0 },
                { category: "Utilities", credit: 0, debit: 0 },
                { category: "Repairs", credit: 0, debit: 0 },
                { category: "Furniture", credit: 0, debit: 0 },
                { category: "Technology", credit: 0, debit: 0 },
                { category: "Marketing", credit: 0, debit: 0 },
                { category: "Events", credit: 0, debit: 0 },
                { category: "Others", credit: 0, debit: 0 },
                { category: "Refund", credit: 0, debit: 0 },
            ],
        },
        {
            input: { from: "2023-01-01T00:00:00Z", to: "2023-06-30T23:59:59Z" },
            expectedOutput: [
                { category: "Tuition", credit: 1500, debit: 0 },
                { category: "Stationery", credit: 0, debit: 300 },
                { category: "Activity", credit: 0, debit: 0 },
                { category: "Library", credit: 500, debit: 0 },
                { category: "Donations", credit: 10000, debit: 0 },
                { category: "Salaries", credit: 0, debit: 3000 },
                { category: "Utilities", credit: 0, debit: 1200 },
                { category: "Repairs", credit: 0, debit: 0 },
                { category: "Furniture", credit: 0, debit: 5000 },
                { category: "Technology", credit: 0, debit: 0 },
                { category: "Marketing", credit: 0, debit: 0 },
                { category: "Events", credit: 0, debit: 0 },
                { category: "Others", credit: 0, debit: 0 },
                { category: "Refund", credit: 0, debit: 0 },
            ],
        },
        {
            input: { from: "2023-03-01T00:00:00Z", to: "2023-03-31T23:59:59Z" },
            expectedOutput: [
                { category: "Tuition", credit: 0, debit: 0 },
                { category: "Stationery", credit: 0, debit: 300 },
                { category: "Activity", credit: 0, debit: 0 },
                { category: "Library", credit: 0, debit: 0 },
                { category: "Donations", credit: 0, debit: 0 },
                { category: "Salaries", credit: 0, debit: 0 },
                { category: "Utilities", credit: 0, debit: 1200 },
                { category: "Repairs", credit: 0, debit: 0 },
                { category: "Furniture", credit: 0, debit: 0 },
                { category: "Technology", credit: 0, debit: 0 },
                { category: "Marketing", credit: 0, debit: 0 },
                { category: "Events", credit: 0, debit: 0 },
                { category: "Others", credit: 0, debit: 0 },
                { category: "Refund", credit: 0, debit: 0 },
            ],
        },
        {
            input: { from: "2023-01-01T00:00:00Z", to: "2023-12-31T23:59:59Z" },
            expectedOutput: [
                { category: "Tuition", credit: 1500, debit: 0 },
                { category: "Stationery", credit: 0, debit: 300 },
                { category: "Activity", credit: 0, debit: 0 },
                { category: "Library", credit: 500, debit: 0 },
                { category: "Donations", credit: 10000, debit: 0 },
                { category: "Salaries", credit: 0, debit: 3000 },
                { category: "Utilities", credit: 0, debit: 1200 },
                { category: "Repairs", credit: 0, debit: 2500 },
                { category: "Furniture", credit: 0, debit: 5000 },
                { category: "Technology", credit: 0, debit: 15000 },
                { category: "Marketing", credit: 0, debit: 2000 },
                { category: "Events", credit: 0, debit: 0 },
                { category: "Others", credit: 0, debit: 0 },
                { category: "Refund", credit: 0, debit: 0 },
            ],
        },
    ];
    // Run test cases
    testCases.forEach((testCase) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield getPaiChartData(testCase.input);
        console.log(JSON.stringify(result) === JSON.stringify(testCase.expectedOutput)
            ? "Pass"
            : `Fail\nExpected: ${JSON.stringify(testCase.expectedOutput)}\nGot: ${JSON.stringify(result)}`);
    }));
};
exports.Testing = Testing;
