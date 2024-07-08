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
exports.RegisterRoutes = RegisterRoutes;
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const transactionlistController_1 = require("./../src/TransactionList/transactionlistController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const studentmanagementController_1 = require("./../src/StudentManagement/studentmanagementController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const optionsmasterController_1 = require("./../src/OptionsMaster/optionsmasterController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const loginregisterController_1 = require("./../src/LoginRegister/loginregisterController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "DefaultSelection_Prisma._36_TransactionsListPayload_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "isDeleted": { "dataType": "boolean", "required": true }, "transactionMode": { "dataType": "string", "required": true }, "modeOfPayment": { "dataType": "string", "required": true }, "amount": { "dataType": "double", "required": true }, "dateOfPayment": { "dataType": "datetime", "required": true }, "category": { "dataType": "string", "required": true }, "description": { "dataType": "string", "required": true }, "itemName": { "dataType": "string", "required": true }, "id": { "dataType": "double", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionsList": {
        "dataType": "refAlias",
        "type": { "ref": "DefaultSelection_Prisma._36_TransactionsListPayload_", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PageResponse_TransactionsList_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "items": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "TransactionsList" }, "required": true }, "totalCount": { "dataType": "double", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ErrorStore": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "ErrorMessage": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ServiceResponse": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "data": { "dataType": "any", "required": true }, "response": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "transactionlistInterface": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "transactionMode": { "dataType": "string", "required": true }, "modeOfPayment": { "dataType": "string", "required": true }, "amount": { "dataType": "double", "required": true }, "dateOfPayment": { "dataType": "datetime", "required": true }, "category": { "dataType": "string", "required": true }, "description": { "dataType": "string", "required": true }, "itemName": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "transactionlistUpdateInterface": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "transactionMode": { "dataType": "string" }, "modeOfPayment": { "dataType": "string" }, "amount": { "dataType": "double" }, "dateOfPayment": { "dataType": "datetime" }, "category": { "dataType": "string" }, "description": { "dataType": "string" }, "itemName": { "dataType": "string" } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionCategory": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "debit": { "dataType": "double", "required": true }, "credit": { "dataType": "double", "required": true }, "category": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DefaultSelection_Prisma._36_StudentPayload_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "dueAmount": { "dataType": "double", "required": true }, "subjectsTaken": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "isDeleted": { "dataType": "boolean", "required": true }, "whatsappNo": { "dataType": "string", "required": true }, "parentPhnNo": { "dataType": "string", "required": true }, "parentName": { "dataType": "string", "required": true }, "timing": { "dataType": "string", "required": true }, "joiningDate": { "dataType": "datetime", "required": true }, "pastScore": { "dataType": "double", "required": true }, "studentStatus": { "dataType": "string", "required": true }, "boardType": { "dataType": "string", "required": true }, "schoolName": { "dataType": "string", "required": true }, "classNo": { "dataType": "string", "required": true }, "name": { "dataType": "string", "required": true }, "id": { "dataType": "double", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Student": {
        "dataType": "refAlias",
        "type": { "ref": "DefaultSelection_Prisma._36_StudentPayload_", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PageResponse_Student_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "items": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "Student" }, "required": true }, "totalCount": { "dataType": "double", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "StudentFeeDataInterface": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "feeDetails": { "dataType": "nestedObjectLiteral", "nestedProperties": { "monthOfPaid": { "dataType": "double", "required": true }, "dateOfPaid": { "dataType": "datetime", "required": true }, "paidAmount": { "dataType": "double", "required": true }, "subjectsTaken": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "id": { "dataType": "double", "required": true } }, "required": true }, "feeCharge": { "dataType": "nestedObjectLiteral", "nestedProperties": { "chargedMonth": { "dataType": "double", "required": true }, "amount": { "dataType": "double", "required": true }, "id": { "dataType": "double", "required": true } }, "required": true }, "parentName": { "dataType": "string", "required": true }, "name": { "dataType": "string", "required": true }, "id": { "dataType": "double", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pagination": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "count": { "dataType": "double", "required": true }, "pageSize": { "dataType": "double", "required": true }, "curentPage": { "dataType": "double", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pageresponse_StudentFeeDataInterface_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "pagination": { "ref": "Pagination", "required": true }, "items": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "StudentFeeDataInterface" }, "required": true }, "totalCount": { "dataType": "double", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "studentCreateInterface": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "feeCharge": { "dataType": "any", "required": true }, "dueAmount": { "dataType": "double", "required": true }, "isDeleted": { "dataType": "boolean", "required": true }, "whatsappNo": { "dataType": "string", "required": true }, "parentPhnNo": { "dataType": "string", "required": true }, "parentName": { "dataType": "string", "required": true }, "timing": { "dataType": "string", "required": true }, "joiningDate": { "dataType": "datetime", "required": true }, "subjectsTaken": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "pastScore": { "dataType": "double", "required": true }, "studentStatus": { "dataType": "string", "required": true }, "boardType": { "dataType": "string", "required": true }, "schoolName": { "dataType": "string", "required": true }, "classNo": { "dataType": "string", "required": true }, "name": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "studentFeeInterface": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "info": { "dataType": "nestedObjectLiteral", "nestedProperties": { "name": { "dataType": "string", "required": true }, "modeOfPayment": { "dataType": "string", "required": true }, "dueAmount": { "dataType": "double", "required": true }, "id": { "dataType": "double", "required": true } }, "required": true }, "data": { "dataType": "nestedObjectLiteral", "nestedProperties": { "subjectsTaken": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "studentId": { "dataType": "double", "required": true }, "paidAmount": { "dataType": "double", "required": true }, "dateOfPaid": { "dataType": "datetime", "required": true } }, "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "studentUpdateInterface": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "dueAmount": { "dataType": "double" }, "isDeleted": { "dataType": "boolean" }, "whatsappNo": { "dataType": "string" }, "parentPhnNo": { "dataType": "string" }, "parentName": { "dataType": "string" }, "timing": { "dataType": "string" }, "joiningDate": { "dataType": "datetime" }, "subjectsTaken": { "dataType": "array", "array": { "dataType": "string" } }, "pastScore": { "dataType": "double" }, "studentStatus": { "dataType": "string" }, "boardType": { "dataType": "string" }, "schoolName": { "dataType": "string" }, "classNo": { "dataType": "string" }, "name": { "dataType": "string" } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Prisma.JsonValue": {
        "dataType": "refAlias",
        "type": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "double" }, { "dataType": "boolean" }, { "ref": "Prisma.JsonObject" }, { "ref": "Prisma.JsonArray" }, { "dataType": "enum", "enums": [null] }], "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Prisma.JsonObject": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": {}, "additionalProperties": { "ref": "Prisma.JsonValue" }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Prisma.JsonArray": {
        "dataType": "refObject",
        "properties": {},
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DefaultSelection_Prisma._36_OptionsMasterPayload_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "transactionMode": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "transactionCategories": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "transactionTypes": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "transactionsCategoryTypes": { "ref": "Prisma.JsonValue", "required": true }, "paymentTypes": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "gradeTypes": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "studentStatusTypes": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "subjectTypes": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "boardTypes": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "id": { "dataType": "double", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OptionsMaster": {
        "dataType": "refAlias",
        "type": { "ref": "DefaultSelection_Prisma._36_OptionsMasterPayload_", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OptionsMasterUpdate": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "transactionMode": { "dataType": "array", "array": { "dataType": "string" } }, "transactionTypes": { "dataType": "array", "array": { "dataType": "string" } }, "transactionsCategoryTypes": { "dataType": "any" }, "paymentTypes": { "dataType": "array", "array": { "dataType": "string" } }, "gradeTypes": { "dataType": "array", "array": { "dataType": "string" } }, "studentStatusTypes": { "dataType": "array", "array": { "dataType": "string" } }, "subjectTypes": { "dataType": "array", "array": { "dataType": "string" } }, "boardTypes": { "dataType": "array", "array": { "dataType": "string" } } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "loginInterface": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "password": { "dataType": "string", "required": true }, "userMail": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DefaultSelection_Prisma._36_LoginRegisterPayload_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "isApproved": { "dataType": "boolean", "required": true }, "role": { "dataType": "string", "required": true }, "password": { "dataType": "string", "required": true }, "userMail": { "dataType": "string", "required": true }, "userName": { "dataType": "string", "required": true }, "id": { "dataType": "double", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LoginRegister": {
        "dataType": "refAlias",
        "type": { "ref": "DefaultSelection_Prisma._36_LoginRegisterPayload_", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "loginregisterUpdateInterface": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "isApproved": { "dataType": "boolean" }, "role": { "dataType": "string" }, "password": { "dataType": "string" }, "userMail": { "dataType": "string" }, "userName": { "dataType": "string" } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new runtime_1.ExpressTemplateService(models, { "noImplicitAdditionalProperties": "throw-on-extras", "bodyCoercion": true });
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.get('/api/transaction/all/items', ...((0, runtime_1.fetchMiddlewares)(transactionlistController_1.transactionlistController)), ...((0, runtime_1.fetchMiddlewares)(transactionlistController_1.transactionlistController.prototype.getAllTransaction)), function transactionlistController_getAllTransaction(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                Pagination: { "in": "query", "name": "Pagination", "dataType": "any" },
                Filters: { "in": "query", "name": "Filters", "dataType": "any" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new transactionlistController_1.transactionlistController();
                yield templateService.apiHandler({
                    methodName: 'getAllTransaction',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/api/transaction/:id', ...((0, runtime_1.fetchMiddlewares)(transactionlistController_1.transactionlistController)), ...((0, runtime_1.fetchMiddlewares)(transactionlistController_1.transactionlistController.prototype.getTransactionById)), function transactionlistController_getTransactionById(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new transactionlistController_1.transactionlistController();
                yield templateService.apiHandler({
                    methodName: 'getTransactionById',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/api/transaction/create', ...((0, runtime_1.fetchMiddlewares)(transactionlistController_1.transactionlistController)), ...((0, runtime_1.fetchMiddlewares)(transactionlistController_1.transactionlistController.prototype.createStudent)), function transactionlistController_createStudent(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                pack: { "in": "body", "name": "pack", "required": true, "ref": "transactionlistInterface" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new transactionlistController_1.transactionlistController();
                yield templateService.apiHandler({
                    methodName: 'createStudent',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/api/transaction/:id', ...((0, runtime_1.fetchMiddlewares)(transactionlistController_1.transactionlistController)), ...((0, runtime_1.fetchMiddlewares)(transactionlistController_1.transactionlistController.prototype.updateTransactionById)), function transactionlistController_updateTransactionById(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
                pack: { "in": "body", "name": "pack", "required": true, "ref": "transactionlistUpdateInterface" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new transactionlistController_1.transactionlistController();
                yield templateService.apiHandler({
                    methodName: 'updateTransactionById',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/api/transaction/chartdata', ...((0, runtime_1.fetchMiddlewares)(transactionlistController_1.transactionlistController)), ...((0, runtime_1.fetchMiddlewares)(transactionlistController_1.transactionlistController.prototype.pieChartTransactionData)), function transactionlistController_pieChartTransactionData(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                pack: { "in": "body", "name": "pack", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "to": { "dataType": "string", "required": true }, "from": { "dataType": "string", "required": true } } },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new transactionlistController_1.transactionlistController();
                yield templateService.apiHandler({
                    methodName: 'pieChartTransactionData',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/api/transaction/:id', ...((0, runtime_1.fetchMiddlewares)(transactionlistController_1.transactionlistController)), ...((0, runtime_1.fetchMiddlewares)(transactionlistController_1.transactionlistController.prototype.deleteStudentById)), function transactionlistController_deleteStudentById(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new transactionlistController_1.transactionlistController();
                yield templateService.apiHandler({
                    methodName: 'deleteStudentById',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/api/transaction/softdelete/:id', ...((0, runtime_1.fetchMiddlewares)(transactionlistController_1.transactionlistController)), ...((0, runtime_1.fetchMiddlewares)(transactionlistController_1.transactionlistController.prototype.softDeleteStudentById)), function transactionlistController_softDeleteStudentById(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new transactionlistController_1.transactionlistController();
                yield templateService.apiHandler({
                    methodName: 'softDeleteStudentById',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/api/student/all/items', ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController)), ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController.prototype.getAllStudents)), function StudentmanagementController_getAllStudents(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                Pagination: { "in": "query", "name": "Pagination", "dataType": "any" },
                Filters: { "in": "query", "name": "Filters", "dataType": "array", "array": { "dataType": "any" } },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new studentmanagementController_1.StudentmanagementController();
                yield templateService.apiHandler({
                    methodName: 'getAllStudents',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/api/student/feedetails', ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController)), ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController.prototype.getAllFeeDeatails)), function StudentmanagementController_getAllFeeDeatails(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                PageData: { "in": "query", "name": "PageData", "dataType": "any" },
                Filters: { "in": "query", "name": "Filters", "dataType": "any" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new studentmanagementController_1.StudentmanagementController();
                yield templateService.apiHandler({
                    methodName: 'getAllFeeDeatails',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/api/student/getbyname', ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController)), ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController.prototype.getStudentByName)), function StudentmanagementController_getStudentByName(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                vlv: { "in": "body", "name": "vlv", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "searchIput": { "dataType": "string", "required": true } } },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new studentmanagementController_1.StudentmanagementController();
                yield templateService.apiHandler({
                    methodName: 'getStudentByName',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/api/student/:id', ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController)), ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController.prototype.getStudentById)), function StudentmanagementController_getStudentById(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new studentmanagementController_1.StudentmanagementController();
                yield templateService.apiHandler({
                    methodName: 'getStudentById',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/api/student/create', ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController)), ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController.prototype.createStudent)), function StudentmanagementController_createStudent(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                pack: { "in": "body", "name": "pack", "required": true, "ref": "studentCreateInterface" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new studentmanagementController_1.StudentmanagementController();
                yield templateService.apiHandler({
                    methodName: 'createStudent',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/api/student/newfee', ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController)), ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController.prototype.addStudentFee)), function StudentmanagementController_addStudentFee(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                pack: { "in": "body", "name": "pack", "required": true, "ref": "studentFeeInterface" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new studentmanagementController_1.StudentmanagementController();
                yield templateService.apiHandler({
                    methodName: 'addStudentFee',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/api/student/:id', ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController)), ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController.prototype.updateStudentById)), function StudentmanagementController_updateStudentById(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
                pack: { "in": "body", "name": "pack", "required": true, "ref": "studentUpdateInterface" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new studentmanagementController_1.StudentmanagementController();
                yield templateService.apiHandler({
                    methodName: 'updateStudentById',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/api/student/:id', ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController)), ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController.prototype.deleteStudentById)), function StudentmanagementController_deleteStudentById(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new studentmanagementController_1.StudentmanagementController();
                yield templateService.apiHandler({
                    methodName: 'deleteStudentById',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/api/selector/getlist', ...((0, runtime_1.fetchMiddlewares)(optionsmasterController_1.OptionmasterController)), ...((0, runtime_1.fetchMiddlewares)(optionsmasterController_1.OptionmasterController.prototype.getSelectorList)), function OptionmasterController_getSelectorList(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {};
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new optionsmasterController_1.OptionmasterController();
                yield templateService.apiHandler({
                    methodName: 'getSelectorList',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/api/selector/update/:id', ...((0, runtime_1.fetchMiddlewares)(optionsmasterController_1.OptionmasterController)), ...((0, runtime_1.fetchMiddlewares)(optionsmasterController_1.OptionmasterController.prototype.updateSelector)), function OptionmasterController_updateSelector(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                pack: { "in": "body", "name": "pack", "required": true, "ref": "OptionsMasterUpdate" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new optionsmasterController_1.OptionmasterController();
                yield templateService.apiHandler({
                    methodName: 'updateSelector',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/api/loginregister/login', ...((0, runtime_1.fetchMiddlewares)(loginregisterController_1.LoginRegisterController)), ...((0, runtime_1.fetchMiddlewares)(loginregisterController_1.LoginRegisterController.prototype.getSelectorList)), function LoginRegisterController_getSelectorList(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                pack: { "in": "body", "name": "pack", "required": true, "ref": "loginInterface" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new loginregisterController_1.LoginRegisterController();
                yield templateService.apiHandler({
                    methodName: 'getSelectorList',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/api/loginregister/all', ...((0, runtime_1.fetchMiddlewares)(loginregisterController_1.LoginRegisterController)), ...((0, runtime_1.fetchMiddlewares)(loginregisterController_1.LoginRegisterController.prototype.getAllLogins)), function LoginRegisterController_getAllLogins(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {};
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new loginregisterController_1.LoginRegisterController();
                yield templateService.apiHandler({
                    methodName: 'getAllLogins',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/api/loginregister/:id', ...((0, runtime_1.fetchMiddlewares)(loginregisterController_1.LoginRegisterController)), ...((0, runtime_1.fetchMiddlewares)(loginregisterController_1.LoginRegisterController.prototype.updateLogin)), function LoginRegisterController_updateLogin(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
                pack: { "in": "body", "name": "pack", "required": true, "ref": "loginregisterUpdateInterface" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new loginregisterController_1.LoginRegisterController();
                yield templateService.apiHandler({
                    methodName: 'updateLogin',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/api/loginregister/:id', ...((0, runtime_1.fetchMiddlewares)(loginregisterController_1.LoginRegisterController)), ...((0, runtime_1.fetchMiddlewares)(loginregisterController_1.LoginRegisterController.prototype.deleteLogin)), function LoginRegisterController_deleteLogin(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new loginregisterController_1.LoginRegisterController();
                yield templateService.apiHandler({
                    methodName: 'deleteLogin',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
