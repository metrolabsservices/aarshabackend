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
exports.OptionmasterController = void 0;
const tsoa_1 = require("tsoa");
const optionsmasterService_1 = require("./optionsmasterService");
let OptionmasterController = class OptionmasterController extends tsoa_1.Controller {
    getSelectorList() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("------------- Controller is running ---------------");
            const serv = new optionsmasterService_1.OptionsMasterServices();
            var out = yield serv.getOptions();
            if (out instanceof Error) {
                this.setStatus(404);
                return { ErrorMessage: out.message };
            }
            this.setStatus(201);
            return out;
        });
    }
    updateSelector(id, pack) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("------------- Controller is running ---------------");
            const serv = new optionsmasterService_1.OptionsMasterServices();
            var out = yield serv.updateOptions(parseInt(id), pack);
            if (out instanceof Error) {
                this.setStatus(404);
                return { ErrorMessage: out.message };
            }
            this.setStatus(201);
            return out;
        });
    }
};
exports.OptionmasterController = OptionmasterController;
__decorate([
    (0, tsoa_1.Get)("getlist")
], OptionmasterController.prototype, "getSelectorList", null);
__decorate([
    (0, tsoa_1.Put)("update/{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)())
], OptionmasterController.prototype, "updateSelector", null);
exports.OptionmasterController = OptionmasterController = __decorate([
    (0, tsoa_1.Tags)("Selectors Master List"),
    (0, tsoa_1.Route)("selector")
], OptionmasterController);
