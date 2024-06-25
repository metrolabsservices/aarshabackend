"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.transactionlistController = void 0;
const tsoa_1 = require("tsoa");
const transactionlistService_1 = require("./transactionlistService");
let transactionlistController = class transactionlistController extends tsoa_1.Controller {
    getAllTransaction(Pagination, Filters) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("------------- Controller is running ---------------", Filters, Pagination);
            const serv = new transactionlistService_1.transactionlistService();
            var out = yield serv.getAllTransactions(Filters, Pagination);
            if (out instanceof Error) {
                this.setStatus(404);
                return { ErrorMessage: out.message };
            }
            this.setStatus(201);
            return out;
        });
    }
    getTransactionById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("------------- Controller is running ---------------");
            const serv = new transactionlistService_1.transactionlistService();
            var out = yield serv.getTransactionById(id);
            if (out instanceof Error) {
                this.setStatus(404);
                return { ErrorMessage: out.message };
            }
            this.setStatus(201);
            return out;
        });
    }
    createStudent(pack) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("------------- Controller is running ---------------");
            const serv = new transactionlistService_1.transactionlistService();
            var out = yield serv.createTransaction(pack);
            if (out instanceof Error) {
                this.setStatus(404);
                return { ErrorMessage: out.message };
            }
            this.setStatus(201);
            return out;
        });
    }
    updateTransactionById(id, pack) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("------------- Controller is running ---------------");
            const serv = new transactionlistService_1.transactionlistService();
            var out = yield serv.updateTransactionById(id, pack);
            if (out instanceof Error) {
                this.setStatus(404);
                return { ErrorMessage: out.message };
            }
            this.setStatus(201);
            return out;
        });
    }
    pieChartTransactionData(pack) {
        return __awaiter(this, void 0, void 0, function* () {
            const serv = new transactionlistService_1.transactionlistService();
            var out = yield serv.getPaiChartData(pack);
            if (out instanceof Error) {
                this.setStatus(404);
                return { ErrorMessage: out.message };
            }
            this.setStatus(201);
            return out;
        });
    }
    deleteStudentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("------------- Controller is running ---------------");
            const serv = new transactionlistService_1.transactionlistService();
            var out = yield serv.deleteTransactionById(id);
            if (out instanceof Error) {
                this.setStatus(404);
                return { ErrorMessage: out.message };
            }
            this.setStatus(201);
            return out;
        });
    }
    softDeleteStudentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("------------- Controller is running ---------------");
            const serv = new transactionlistService_1.transactionlistService();
            var out = yield serv.softDeleteTransactionById(id);
            if (out instanceof Error) {
                this.setStatus(404);
                return { ErrorMessage: out.message };
            }
            this.setStatus(201);
            return out;
        });
    }
};
exports.transactionlistController = transactionlistController;
__decorate([
    (0, tsoa_1.Get)("all/items"),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, tsoa_1.Query)())
], transactionlistController.prototype, "getAllTransaction", null);
__decorate([
    (0, tsoa_1.Get)("{id}"),
    __param(0, (0, tsoa_1.Path)())
], transactionlistController.prototype, "getTransactionById", null);
__decorate([
    (0, tsoa_1.Post)("create"),
    __param(0, (0, tsoa_1.Body)())
], transactionlistController.prototype, "createStudent", null);
__decorate([
    (0, tsoa_1.Put)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)())
], transactionlistController.prototype, "updateTransactionById", null);
__decorate([
    (0, tsoa_1.Post)("chartdata"),
    __param(0, (0, tsoa_1.Body)())
], transactionlistController.prototype, "pieChartTransactionData", null);
__decorate([
    (0, tsoa_1.Delete)("{id}"),
    __param(0, (0, tsoa_1.Path)())
], transactionlistController.prototype, "deleteStudentById", null);
__decorate([
    (0, tsoa_1.Delete)("softdelete/{id}"),
    __param(0, (0, tsoa_1.Path)())
], transactionlistController.prototype, "softDeleteStudentById", null);
exports.transactionlistController = transactionlistController = __decorate([
    (0, tsoa_1.Tags)("Expanses Transactions"),
    (0, tsoa_1.Route)("transaction")
], transactionlistController);
