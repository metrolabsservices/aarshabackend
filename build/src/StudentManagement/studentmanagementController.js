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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentmanagementController = void 0;
const tsoa_1 = require("tsoa");
const studentmanagementService_1 = require("./studentmanagementService");
let StudentmanagementController = class StudentmanagementController extends tsoa_1.Controller {
    getStudentById(id) {
        this.setStatus(201);
        console.log("------------- Controller is running ---------------");
        return new studentmanagementService_1.StudentmanagementService().getStudentById(id);
    }
};
exports.StudentmanagementController = StudentmanagementController;
__decorate([
    (0, tsoa_1.Get)("{id}"),
    __param(0, (0, tsoa_1.Path)())
], StudentmanagementController.prototype, "getStudentById", null);
exports.StudentmanagementController = StudentmanagementController = __decorate([
    (0, tsoa_1.Tags)("Student Management"),
    (0, tsoa_1.Route)("student")
], StudentmanagementController);
