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
exports.LoginRegisterServices = void 0;
const client_1 = require("@prisma/client");
class LoginRegisterServices {
    checkLogin(pack) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const loginCheckMail = () => __awaiter(this, void 0, void 0, function* () {
                const dbCall = yield prisma.loginRegister.findUniqueOrThrow({
                    where: {
                        userMail: pack.userMail,
                        //   password: pack.password,
                    },
                });
                return dbCall;
            });
            const loginCheckPassword = (newPack) => __awaiter(this, void 0, void 0, function* () {
                if (newPack.password === pack.password) {
                    if (newPack.isApproved) {
                        //   console.log("Login clear ");
                        return newPack;
                    }
                    return new Error("Not Approved");
                }
                return new Error("Password Incorrect");
                //   console.log(newPack, pack, newPack.password === pack.password);
            });
            return loginCheckMail()
                .then((result) => {
                console.log("------", result, "---------");
                return loginCheckPassword(result);
            })
                .catch(() => {
                // console.log("*******", err, "********");
                return new Error("Email not Found");
            })
                .finally(() => __awaiter(this, void 0, void 0, function* () {
                yield prisma.$disconnect();
            }));
        });
    }
    getAllLogins() {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const getLogins = () => __awaiter(this, void 0, void 0, function* () {
                return yield prisma.loginRegister.findMany({
                    orderBy: {
                        id: "asc",
                    },
                });
            });
            return getLogins()
                .then((result) => {
                if (result.length === 0) {
                    return new Error("No Data Found");
                }
                return result;
            })
                .catch(() => {
                // console.log("*******", err, "********");
                return new Error("Failed to Get data");
            })
                .finally(() => __awaiter(this, void 0, void 0, function* () {
                yield prisma.$disconnect();
            }));
        });
    }
    updateRecord(id, pack) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const updateId = () => __awaiter(this, void 0, void 0, function* () {
                return yield prisma.loginRegister.updateMany({
                    where: {
                        id: id,
                    },
                    data: Object.assign({}, pack),
                });
            });
            return updateId()
                .then((result) => {
                console.log(result);
                if (result.count == 1) {
                    return "Record Updated Successfully";
                }
                return Error("Record Not Available to update");
            })
                .catch(() => {
                // console.log("*******", err, "********");
                return new Error("Failed to Get data");
            })
                .finally(() => __awaiter(this, void 0, void 0, function* () {
                yield prisma.$disconnect();
            }));
        });
    }
    deleteRecord(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const deleteId = () => __awaiter(this, void 0, void 0, function* () {
                return yield prisma.loginRegister.deleteMany({
                    where: {
                        id: id,
                    },
                });
            });
            return deleteId()
                .then((result) => {
                console.log(result);
                if (result.count == 1) {
                    return "Record Deleted Successfully";
                }
                return Error("Record Not Available to delete");
            })
                .catch(() => {
                // console.log("*******", err, "********");
                return new Error("Failed to Get data");
            })
                .finally(() => __awaiter(this, void 0, void 0, function* () {
                yield prisma.$disconnect();
            }));
        });
    }
}
exports.LoginRegisterServices = LoginRegisterServices;
