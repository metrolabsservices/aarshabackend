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
exports.OptionsMasterServices = void 0;
const client_1 = require("@prisma/client");
class OptionsMasterServices {
    getOptions() {
        const prisma = new client_1.PrismaClient();
        const getAllOptions = () => __awaiter(this, void 0, void 0, function* () {
            const dbCall = yield prisma.optionsMaster.findMany();
            return dbCall;
        });
        return getAllOptions()
            .then((result) => {
            console.log(result);
            if (result.length === 0) {
                return new Error("Data Not Found");
            }
            return result[0];
        })
            .catch((err) => {
            console.log(err);
            return new Error("Failed to retriev details");
        })
            .finally(() => __awaiter(this, void 0, void 0, function* () {
            yield prisma.$disconnect();
        }));
    }
    updateOptions(id, pack) {
        const prisma = new client_1.PrismaClient();
        const updateSpecificOption = () => __awaiter(this, void 0, void 0, function* () {
            const dbCall = yield prisma.optionsMaster.updateMany({
                where: {
                    id: id,
                },
                data: Object.assign({}, pack),
            });
            return dbCall;
        });
        return updateSpecificOption()
            .then((result) => {
            console.log(result);
            return "Update Successfully";
        })
            .catch((err) => {
            console.log(err);
            return new Error("Failed to retriev details");
        })
            .finally(() => __awaiter(this, void 0, void 0, function* () {
            yield prisma.$disconnect();
        }));
    }
}
exports.OptionsMasterServices = OptionsMasterServices;
