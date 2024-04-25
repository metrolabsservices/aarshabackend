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
exports.StudentmanagementController = void 0;
const tsoa_1 = require("tsoa");
const studentmanagementService_1 = require("./studentmanagementService");
let StudentmanagementController = class StudentmanagementController extends tsoa_1.Controller {
    getAllStudents(Pagination, Filters) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("------------- Controller is running ---------------");
            const serv = new studentmanagementService_1.StudentmanagementService();
            var out = yield serv.getAllStudents({ Pagination, Filters });
            if (out instanceof Error) {
                this.setStatus(404);
                return { ErrorMessage: out.message };
            }
            this.setStatus(201);
            return out;
        });
    }
    getAllFeeDeatails(PageData, Filters) {
        return __awaiter(this, void 0, void 0, function* () {
            const serv = new studentmanagementService_1.StudentmanagementService();
            var out = yield serv.getAllStudentsFeeData(PageData, Filters);
            if (out instanceof Error) {
                this.setStatus(404);
                return { ErrorMessage: out.message };
            }
            this.setStatus(201);
            return out;
        });
    }
    getStudentByName(vlv) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("------------- Controller is running ---------------", vlv);
            const serv = new studentmanagementService_1.StudentmanagementService();
            var out = yield serv.getAllByName(vlv.searchIput);
            if (out instanceof Error) {
                this.setStatus(404);
                return { ErrorMessage: out.message };
            }
            this.setStatus(201);
            return out;
        });
    }
    getStudentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("------------- Controller is running ---------------");
            const serv = new studentmanagementService_1.StudentmanagementService();
            var out = yield serv.getStudentById(id);
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
            const serv = new studentmanagementService_1.StudentmanagementService();
            var out = yield serv.createStudent(pack);
            if (out instanceof Error) {
                this.setStatus(404);
                return { ErrorMessage: out.message };
            }
            this.setStatus(201);
            return out;
        });
    }
    addStudentFee(pack) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("------------- Controller is running ---------------", pack);
            const serv = new studentmanagementService_1.StudentmanagementService();
            var out = yield serv.studentFeePayByID(pack);
            if (out instanceof Error) {
                this.setStatus(404);
                return { ErrorMessage: out.message };
            }
            this.setStatus(201);
            return out;
            // return "failed";
        });
    }
    updateStudentById(id, pack) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("------------- Controller is running ---------------", pack);
            const serv = new studentmanagementService_1.StudentmanagementService();
            var out = yield serv.updateStudentById(id, pack);
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
            const serv = new studentmanagementService_1.StudentmanagementService();
            var out = yield serv.deleteStudentById(id);
            if (out instanceof Error) {
                this.setStatus(404);
                return { ErrorMessage: out.message };
            }
            this.setStatus(201);
            return out;
        });
    }
};
exports.StudentmanagementController = StudentmanagementController;
__decorate([
    (0, tsoa_1.Get)("all/items"),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, tsoa_1.Query)())
], StudentmanagementController.prototype, "getAllStudents", null);
__decorate([
    (0, tsoa_1.Get)("feedetails"),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, tsoa_1.Query)())
], StudentmanagementController.prototype, "getAllFeeDeatails", null);
__decorate([
    (0, tsoa_1.Post)("getbyname"),
    __param(0, (0, tsoa_1.Body)())
], StudentmanagementController.prototype, "getStudentByName", null);
__decorate([
    (0, tsoa_1.Get)("{id}"),
    __param(0, (0, tsoa_1.Path)())
], StudentmanagementController.prototype, "getStudentById", null);
__decorate([
    (0, tsoa_1.Post)("create"),
    __param(0, (0, tsoa_1.Body)())
], StudentmanagementController.prototype, "createStudent", null);
__decorate([
    (0, tsoa_1.Post)("newfee"),
    __param(0, (0, tsoa_1.Body)())
], StudentmanagementController.prototype, "addStudentFee", null);
__decorate([
    (0, tsoa_1.Put)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)())
], StudentmanagementController.prototype, "updateStudentById", null);
__decorate([
    (0, tsoa_1.Delete)("{id}"),
    __param(0, (0, tsoa_1.Path)())
], StudentmanagementController.prototype, "deleteStudentById", null);
exports.StudentmanagementController = StudentmanagementController = __decorate([
    (0, tsoa_1.Tags)("Student Management"),
    (0, tsoa_1.Route)("student")
], StudentmanagementController);
