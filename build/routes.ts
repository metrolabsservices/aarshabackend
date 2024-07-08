/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TsoaRoute, fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { transactionlistController } from './../src/TransactionList/transactionlistController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { StudentmanagementController } from './../src/StudentManagement/studentmanagementController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { OptionmasterController } from './../src/OptionsMaster/optionsmasterController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { LoginRegisterController } from './../src/LoginRegister/loginregisterController';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "DefaultSelection_Prisma._36_TransactionsListPayload_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"isDeleted":{"dataType":"boolean","required":true},"transactionMode":{"dataType":"string","required":true},"modeOfPayment":{"dataType":"string","required":true},"amount":{"dataType":"double","required":true},"dateOfPayment":{"dataType":"datetime","required":true},"category":{"dataType":"string","required":true},"description":{"dataType":"string","required":true},"itemName":{"dataType":"string","required":true},"id":{"dataType":"double","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionsList": {
        "dataType": "refAlias",
        "type": {"ref":"DefaultSelection_Prisma._36_TransactionsListPayload_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PageResponse_TransactionsList_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"items":{"dataType":"array","array":{"dataType":"refAlias","ref":"TransactionsList"},"required":true},"totalCount":{"dataType":"double","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ErrorStore": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"ErrorMessage":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ServiceResponse": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"data":{"dataType":"any","required":true},"response":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "transactionlistInterface": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"transactionMode":{"dataType":"string","required":true},"modeOfPayment":{"dataType":"string","required":true},"amount":{"dataType":"double","required":true},"dateOfPayment":{"dataType":"datetime","required":true},"category":{"dataType":"string","required":true},"description":{"dataType":"string","required":true},"itemName":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "transactionlistUpdateInterface": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"transactionMode":{"dataType":"string"},"modeOfPayment":{"dataType":"string"},"amount":{"dataType":"double"},"dateOfPayment":{"dataType":"datetime"},"category":{"dataType":"string"},"description":{"dataType":"string"},"itemName":{"dataType":"string"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionCategory": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"debit":{"dataType":"double","required":true},"credit":{"dataType":"double","required":true},"category":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DefaultSelection_Prisma._36_StudentPayload_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"dueAmount":{"dataType":"double","required":true},"subjectsTaken":{"dataType":"array","array":{"dataType":"string"},"required":true},"isDeleted":{"dataType":"boolean","required":true},"whatsappNo":{"dataType":"string","required":true},"parentPhnNo":{"dataType":"string","required":true},"parentName":{"dataType":"string","required":true},"timing":{"dataType":"string","required":true},"joiningDate":{"dataType":"datetime","required":true},"pastScore":{"dataType":"double","required":true},"studentStatus":{"dataType":"string","required":true},"boardType":{"dataType":"string","required":true},"schoolName":{"dataType":"string","required":true},"classNo":{"dataType":"string","required":true},"name":{"dataType":"string","required":true},"id":{"dataType":"double","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Student": {
        "dataType": "refAlias",
        "type": {"ref":"DefaultSelection_Prisma._36_StudentPayload_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PageResponse_Student_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"items":{"dataType":"array","array":{"dataType":"refAlias","ref":"Student"},"required":true},"totalCount":{"dataType":"double","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "StudentFeeDataInterface": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"feeDetails":{"dataType":"nestedObjectLiteral","nestedProperties":{"monthOfPaid":{"dataType":"double","required":true},"dateOfPaid":{"dataType":"datetime","required":true},"paidAmount":{"dataType":"double","required":true},"subjectsTaken":{"dataType":"array","array":{"dataType":"string"},"required":true},"id":{"dataType":"double","required":true}},"required":true},"feeCharge":{"dataType":"nestedObjectLiteral","nestedProperties":{"chargedMonth":{"dataType":"double","required":true},"amount":{"dataType":"double","required":true},"id":{"dataType":"double","required":true}},"required":true},"parentName":{"dataType":"string","required":true},"name":{"dataType":"string","required":true},"id":{"dataType":"double","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pagination": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"count":{"dataType":"double","required":true},"pageSize":{"dataType":"double","required":true},"curentPage":{"dataType":"double","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pageresponse_StudentFeeDataInterface_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"pagination":{"ref":"Pagination","required":true},"items":{"dataType":"array","array":{"dataType":"refAlias","ref":"StudentFeeDataInterface"},"required":true},"totalCount":{"dataType":"double","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "studentCreateInterface": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"feeCharge":{"dataType":"any","required":true},"dueAmount":{"dataType":"double","required":true},"isDeleted":{"dataType":"boolean","required":true},"whatsappNo":{"dataType":"string","required":true},"parentPhnNo":{"dataType":"string","required":true},"parentName":{"dataType":"string","required":true},"timing":{"dataType":"string","required":true},"joiningDate":{"dataType":"datetime","required":true},"subjectsTaken":{"dataType":"array","array":{"dataType":"string"},"required":true},"pastScore":{"dataType":"double","required":true},"studentStatus":{"dataType":"string","required":true},"boardType":{"dataType":"string","required":true},"schoolName":{"dataType":"string","required":true},"classNo":{"dataType":"string","required":true},"name":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "studentFeeInterface": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"info":{"dataType":"nestedObjectLiteral","nestedProperties":{"name":{"dataType":"string","required":true},"modeOfPayment":{"dataType":"string","required":true},"dueAmount":{"dataType":"double","required":true},"id":{"dataType":"double","required":true}},"required":true},"data":{"dataType":"nestedObjectLiteral","nestedProperties":{"subjectsTaken":{"dataType":"array","array":{"dataType":"string"},"required":true},"studentId":{"dataType":"double","required":true},"paidAmount":{"dataType":"double","required":true},"dateOfPaid":{"dataType":"datetime","required":true}},"required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "studentUpdateInterface": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"dueAmount":{"dataType":"double"},"isDeleted":{"dataType":"boolean"},"whatsappNo":{"dataType":"string"},"parentPhnNo":{"dataType":"string"},"parentName":{"dataType":"string"},"timing":{"dataType":"string"},"joiningDate":{"dataType":"datetime"},"subjectsTaken":{"dataType":"array","array":{"dataType":"string"}},"pastScore":{"dataType":"double"},"studentStatus":{"dataType":"string"},"boardType":{"dataType":"string"},"schoolName":{"dataType":"string"},"classNo":{"dataType":"string"},"name":{"dataType":"string"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Prisma.JsonValue": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"double"},{"dataType":"boolean"},{"ref":"Prisma.JsonObject"},{"ref":"Prisma.JsonArray"},{"dataType":"enum","enums":[null]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Prisma.JsonObject": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"ref":"Prisma.JsonValue"},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Prisma.JsonArray": {
        "dataType": "refObject",
        "properties": {
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DefaultSelection_Prisma._36_OptionsMasterPayload_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"transactionMode":{"dataType":"array","array":{"dataType":"string"},"required":true},"transactionCategories":{"dataType":"array","array":{"dataType":"string"},"required":true},"transactionTypes":{"dataType":"array","array":{"dataType":"string"},"required":true},"transactionsCategoryTypes":{"ref":"Prisma.JsonValue","required":true},"paymentTypes":{"dataType":"array","array":{"dataType":"string"},"required":true},"gradeTypes":{"dataType":"array","array":{"dataType":"string"},"required":true},"studentStatusTypes":{"dataType":"array","array":{"dataType":"string"},"required":true},"subjectTypes":{"dataType":"array","array":{"dataType":"string"},"required":true},"boardTypes":{"dataType":"array","array":{"dataType":"string"},"required":true},"id":{"dataType":"double","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OptionsMaster": {
        "dataType": "refAlias",
        "type": {"ref":"DefaultSelection_Prisma._36_OptionsMasterPayload_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OptionsMasterUpdate": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"transactionMode":{"dataType":"array","array":{"dataType":"string"}},"transactionTypes":{"dataType":"array","array":{"dataType":"string"}},"transactionsCategoryTypes":{"dataType":"any"},"paymentTypes":{"dataType":"array","array":{"dataType":"string"}},"gradeTypes":{"dataType":"array","array":{"dataType":"string"}},"studentStatusTypes":{"dataType":"array","array":{"dataType":"string"}},"subjectTypes":{"dataType":"array","array":{"dataType":"string"}},"boardTypes":{"dataType":"array","array":{"dataType":"string"}}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "loginInterface": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"password":{"dataType":"string","required":true},"userMail":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DefaultSelection_Prisma._36_LoginRegisterPayload_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"isApproved":{"dataType":"boolean","required":true},"role":{"dataType":"string","required":true},"password":{"dataType":"string","required":true},"userMail":{"dataType":"string","required":true},"userName":{"dataType":"string","required":true},"id":{"dataType":"double","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LoginRegister": {
        "dataType": "refAlias",
        "type": {"ref":"DefaultSelection_Prisma._36_LoginRegisterPayload_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "loginregisterUpdateInterface": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"isApproved":{"dataType":"boolean"},"role":{"dataType":"string"},"password":{"dataType":"string"},"userMail":{"dataType":"string"},"userName":{"dataType":"string"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
        app.get('/transaction/all/items',
            ...(fetchMiddlewares<RequestHandler>(transactionlistController)),
            ...(fetchMiddlewares<RequestHandler>(transactionlistController.prototype.getAllTransaction)),

            async function transactionlistController_getAllTransaction(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    Pagination: {"in":"query","name":"Pagination","dataType":"any"},
                    Filters: {"in":"query","name":"Filters","dataType":"any"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new transactionlistController();

              await templateService.apiHandler({
                methodName: 'getAllTransaction',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/transaction/:id',
            ...(fetchMiddlewares<RequestHandler>(transactionlistController)),
            ...(fetchMiddlewares<RequestHandler>(transactionlistController.prototype.getTransactionById)),

            async function transactionlistController_getTransactionById(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new transactionlistController();

              await templateService.apiHandler({
                methodName: 'getTransactionById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/transaction/create',
            ...(fetchMiddlewares<RequestHandler>(transactionlistController)),
            ...(fetchMiddlewares<RequestHandler>(transactionlistController.prototype.createStudent)),

            async function transactionlistController_createStudent(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    pack: {"in":"body","name":"pack","required":true,"ref":"transactionlistInterface"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new transactionlistController();

              await templateService.apiHandler({
                methodName: 'createStudent',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/transaction/:id',
            ...(fetchMiddlewares<RequestHandler>(transactionlistController)),
            ...(fetchMiddlewares<RequestHandler>(transactionlistController.prototype.updateTransactionById)),

            async function transactionlistController_updateTransactionById(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
                    pack: {"in":"body","name":"pack","required":true,"ref":"transactionlistUpdateInterface"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new transactionlistController();

              await templateService.apiHandler({
                methodName: 'updateTransactionById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/transaction/chartdata',
            ...(fetchMiddlewares<RequestHandler>(transactionlistController)),
            ...(fetchMiddlewares<RequestHandler>(transactionlistController.prototype.pieChartTransactionData)),

            async function transactionlistController_pieChartTransactionData(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    pack: {"in":"body","name":"pack","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"to":{"dataType":"string","required":true},"from":{"dataType":"string","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new transactionlistController();

              await templateService.apiHandler({
                methodName: 'pieChartTransactionData',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/transaction/:id',
            ...(fetchMiddlewares<RequestHandler>(transactionlistController)),
            ...(fetchMiddlewares<RequestHandler>(transactionlistController.prototype.deleteStudentById)),

            async function transactionlistController_deleteStudentById(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new transactionlistController();

              await templateService.apiHandler({
                methodName: 'deleteStudentById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/transaction/softdelete/:id',
            ...(fetchMiddlewares<RequestHandler>(transactionlistController)),
            ...(fetchMiddlewares<RequestHandler>(transactionlistController.prototype.softDeleteStudentById)),

            async function transactionlistController_softDeleteStudentById(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new transactionlistController();

              await templateService.apiHandler({
                methodName: 'softDeleteStudentById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/student/all/items',
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController)),
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController.prototype.getAllStudents)),

            async function StudentmanagementController_getAllStudents(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    Pagination: {"in":"query","name":"Pagination","dataType":"any"},
                    Filters: {"in":"query","name":"Filters","dataType":"array","array":{"dataType":"any"}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new StudentmanagementController();

              await templateService.apiHandler({
                methodName: 'getAllStudents',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/student/feedetails',
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController)),
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController.prototype.getAllFeeDeatails)),

            async function StudentmanagementController_getAllFeeDeatails(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    PageData: {"in":"query","name":"PageData","dataType":"any"},
                    Filters: {"in":"query","name":"Filters","dataType":"any"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new StudentmanagementController();

              await templateService.apiHandler({
                methodName: 'getAllFeeDeatails',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/student/getbyname',
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController)),
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController.prototype.getStudentByName)),

            async function StudentmanagementController_getStudentByName(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    vlv: {"in":"body","name":"vlv","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"searchIput":{"dataType":"string","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new StudentmanagementController();

              await templateService.apiHandler({
                methodName: 'getStudentByName',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/student/:id',
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController)),
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController.prototype.getStudentById)),

            async function StudentmanagementController_getStudentById(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new StudentmanagementController();

              await templateService.apiHandler({
                methodName: 'getStudentById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/student/create',
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController)),
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController.prototype.createStudent)),

            async function StudentmanagementController_createStudent(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    pack: {"in":"body","name":"pack","required":true,"ref":"studentCreateInterface"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new StudentmanagementController();

              await templateService.apiHandler({
                methodName: 'createStudent',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/student/newfee',
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController)),
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController.prototype.addStudentFee)),

            async function StudentmanagementController_addStudentFee(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    pack: {"in":"body","name":"pack","required":true,"ref":"studentFeeInterface"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new StudentmanagementController();

              await templateService.apiHandler({
                methodName: 'addStudentFee',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/student/:id',
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController)),
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController.prototype.updateStudentById)),

            async function StudentmanagementController_updateStudentById(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
                    pack: {"in":"body","name":"pack","required":true,"ref":"studentUpdateInterface"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new StudentmanagementController();

              await templateService.apiHandler({
                methodName: 'updateStudentById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/student/:id',
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController)),
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController.prototype.deleteStudentById)),

            async function StudentmanagementController_deleteStudentById(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new StudentmanagementController();

              await templateService.apiHandler({
                methodName: 'deleteStudentById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/selector/getlist',
            ...(fetchMiddlewares<RequestHandler>(OptionmasterController)),
            ...(fetchMiddlewares<RequestHandler>(OptionmasterController.prototype.getSelectorList)),

            async function OptionmasterController_getSelectorList(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new OptionmasterController();

              await templateService.apiHandler({
                methodName: 'getSelectorList',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/selector/update/:id',
            ...(fetchMiddlewares<RequestHandler>(OptionmasterController)),
            ...(fetchMiddlewares<RequestHandler>(OptionmasterController.prototype.updateSelector)),

            async function OptionmasterController_updateSelector(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"string"},
                    pack: {"in":"body","name":"pack","required":true,"ref":"OptionsMasterUpdate"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new OptionmasterController();

              await templateService.apiHandler({
                methodName: 'updateSelector',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/loginregister/login',
            ...(fetchMiddlewares<RequestHandler>(LoginRegisterController)),
            ...(fetchMiddlewares<RequestHandler>(LoginRegisterController.prototype.getSelectorList)),

            async function LoginRegisterController_getSelectorList(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    pack: {"in":"body","name":"pack","required":true,"ref":"loginInterface"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new LoginRegisterController();

              await templateService.apiHandler({
                methodName: 'getSelectorList',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/loginregister/all',
            ...(fetchMiddlewares<RequestHandler>(LoginRegisterController)),
            ...(fetchMiddlewares<RequestHandler>(LoginRegisterController.prototype.getAllLogins)),

            async function LoginRegisterController_getAllLogins(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new LoginRegisterController();

              await templateService.apiHandler({
                methodName: 'getAllLogins',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/loginregister/:id',
            ...(fetchMiddlewares<RequestHandler>(LoginRegisterController)),
            ...(fetchMiddlewares<RequestHandler>(LoginRegisterController.prototype.updateLogin)),

            async function LoginRegisterController_updateLogin(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
                    pack: {"in":"body","name":"pack","required":true,"ref":"loginregisterUpdateInterface"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new LoginRegisterController();

              await templateService.apiHandler({
                methodName: 'updateLogin',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/loginregister/:id',
            ...(fetchMiddlewares<RequestHandler>(LoginRegisterController)),
            ...(fetchMiddlewares<RequestHandler>(LoginRegisterController.prototype.deleteLogin)),

            async function LoginRegisterController_deleteLogin(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new LoginRegisterController();

              await templateService.apiHandler({
                methodName: 'deleteLogin',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
