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
exports.trxChartFilter = exports.trxFilter = exports.feeFilter = void 0;
const feeFilter = (data) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof data == "undefined") {
        return { where: {}, res: false };
    }
    else {
        let source = [];
        data.map((i) => {
            if (i.operation === "combinedSearch") {
                source.push({ [i.key]: { contains: i.value, mode: "insensitive" } });
            }
        });
        return { where: { OR: source }, res: true };
    }
});
exports.feeFilter = feeFilter;
const trxFilter = (data) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof data == "undefined") {
        return { data: { where: {} }, status: false };
    }
    else {
        let isFiltered = { data: { where: {} }, status: false };
        isFiltered =
            data.type === "number"
                ? {
                    data: { where: { id: { equals: parseInt(data.value) } } },
                    status: true,
                }
                : {
                    data: {
                        where: {
                            itemName: { contains: data.value, mode: "insensitive" },
                        },
                    },
                    status: true,
                };
        return isFiltered;
    }
});
exports.trxFilter = trxFilter;
const trxChartFilter = (pack) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(pack, "data in Pie Chart ");
});
exports.trxChartFilter = trxChartFilter;
