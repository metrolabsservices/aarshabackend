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
exports.LoginRegisterController = void 0;
const tsoa_1 = require("tsoa");
const loginregisterService_1 = require("./loginregisterService");
let LoginRegisterController = class LoginRegisterController extends tsoa_1.Controller {
    getSelectorList(pack) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("------------- Controller is running ---------------");
            const serv = new loginregisterService_1.LoginRegisterServices();
            var out = yield serv.checkLogin(pack);
            if (out instanceof Error) {
                this.setStatus(404);
                return { ErrorMessage: out.message };
            }
            this.setStatus(201);
            return out;
        });
    }
    getAllLogins() {
        return __awaiter(this, void 0, void 0, function* () {
            const serv = new loginregisterService_1.LoginRegisterServices();
            var out = yield serv.getAllLogins();
            if (out instanceof Error) {
                this.setStatus(404);
                return { ErrorMessage: out.message };
            }
            this.setStatus(201);
            return out;
        });
    }
    updateLogin(id, pack) {
        return __awaiter(this, void 0, void 0, function* () {
            const serv = new loginregisterService_1.LoginRegisterServices();
            var out = yield serv.updateRecord(id, pack);
            if (out instanceof Error) {
                this.setStatus(404);
                return { ErrorMessage: out.message };
            }
            this.setStatus(201);
            return out;
        });
    }
    deleteLogin(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const serv = new loginregisterService_1.LoginRegisterServices();
            var out = yield serv.deleteRecord(id);
            if (out instanceof Error) {
                this.setStatus(404);
                return { ErrorMessage: out.message };
            }
            this.setStatus(201);
            return out;
        });
    }
};
exports.LoginRegisterController = LoginRegisterController;
__decorate([
    (0, tsoa_1.Put)("login"),
    __param(0, (0, tsoa_1.Body)())
], LoginRegisterController.prototype, "getSelectorList", null);
__decorate([
    (0, tsoa_1.Get)("all")
], LoginRegisterController.prototype, "getAllLogins", null);
__decorate([
    (0, tsoa_1.Put)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)())
], LoginRegisterController.prototype, "updateLogin", null);
__decorate([
    (0, tsoa_1.Delete)("{id}"),
    __param(0, (0, tsoa_1.Path)())
], LoginRegisterController.prototype, "deleteLogin", null);
exports.LoginRegisterController = LoginRegisterController = __decorate([
    (0, tsoa_1.Tags)("Logins & Registers"),
    (0, tsoa_1.Route)("loginregister")
], LoginRegisterController);
