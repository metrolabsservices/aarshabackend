/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { Controller, ValidationService, FieldErrors, ValidateError, TsoaRoute, HttpStatusCodeLiteral, TsoaResponse, fetchMiddlewares } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { LoginRegisterController } from './../src/LoginRegister/loginregisterController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { OptionmasterController } from './../src/OptionsMaster/optionsmasterController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { StudentmanagementController } from './../src/StudentManagement/studentmanagementController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { transactionlistController } from './../src/TransactionList/transactionlistController';
import type { RequestHandler, Router } from 'express';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "ErrorStore": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"ErrorMessage":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "loginInterface": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"password":{"dataType":"string","required":true},"userMail":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JsonObject": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JsonArray": {
        "dataType": "refObject",
        "properties": {
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JsonValue": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"double"},{"dataType":"boolean"},{"ref":"JsonObject"},{"ref":"JsonArray"},{"dataType":"enum","enums":[null]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "%24Result.DefaultSelection_Prisma.%24OptionsMasterPayload_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"transactionTypes":{"dataType":"array","array":{"dataType":"string"},"required":true},"transactionsCategoryTypes":{"ref":"JsonValue","required":true},"paymentTypes":{"dataType":"array","array":{"dataType":"string"},"required":true},"gradeTypes":{"dataType":"array","array":{"dataType":"string"},"required":true},"studentStatusTypes":{"dataType":"array","array":{"dataType":"string"},"required":true},"subjectTypes":{"dataType":"array","array":{"dataType":"string"},"required":true},"boardTypes":{"dataType":"array","array":{"dataType":"string"},"required":true},"id":{"dataType":"double","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OptionsMaster": {
        "dataType": "refAlias",
        "type": {"ref":"%24Result.DefaultSelection_Prisma.%24OptionsMasterPayload_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OptionsMasterUpdate": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"transactionTypes":{"dataType":"array","array":{"dataType":"string"}},"transactionsCategoryTypes":{"dataType":"any"},"paymentTypes":{"dataType":"array","array":{"dataType":"string"}},"gradeTypes":{"dataType":"array","array":{"dataType":"string"}},"studentStatusTypes":{"dataType":"array","array":{"dataType":"string"}},"subjectTypes":{"dataType":"array","array":{"dataType":"string"}},"boardTypes":{"dataType":"array","array":{"dataType":"string"}}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "%24Result.DefaultSelection_Prisma.%24StudentPayload_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"dueAmount":{"dataType":"double","required":true},"subjectsTaken":{"dataType":"array","array":{"dataType":"string"},"required":true},"isDeleted":{"dataType":"boolean","required":true},"whatsappNo":{"dataType":"string","required":true},"parentPhnNo":{"dataType":"string","required":true},"parentName":{"dataType":"string","required":true},"timing":{"dataType":"string","required":true},"joiningDate":{"dataType":"datetime","required":true},"pastScore":{"dataType":"double","required":true},"studentStatus":{"dataType":"string","required":true},"boardType":{"dataType":"string","required":true},"schoolName":{"dataType":"string","required":true},"classNo":{"dataType":"string","required":true},"name":{"dataType":"string","required":true},"id":{"dataType":"double","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Student": {
        "dataType": "refAlias",
        "type": {"ref":"%24Result.DefaultSelection_Prisma.%24StudentPayload_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PageResponse_Student_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"items":{"dataType":"array","array":{"dataType":"refAlias","ref":"Student"},"required":true},"totalCount":{"dataType":"double","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ServiceResponse": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"data":{"dataType":"any","required":true},"response":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "studentCreateInterface": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"dueAmount":{"dataType":"double","required":true},"isDeleted":{"dataType":"boolean","required":true},"whatsappNo":{"dataType":"string","required":true},"parentPhnNo":{"dataType":"string","required":true},"parentName":{"dataType":"string","required":true},"timing":{"dataType":"string","required":true},"joiningDate":{"dataType":"datetime","required":true},"subjectsTaken":{"dataType":"array","array":{"dataType":"string"},"required":true},"pastScore":{"dataType":"double","required":true},"studentStatus":{"dataType":"string","required":true},"boardType":{"dataType":"string","required":true},"schoolName":{"dataType":"string","required":true},"classNo":{"dataType":"string","required":true},"name":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "studentUpdateInterface": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"dueAmount":{"dataType":"double"},"isDeleted":{"dataType":"boolean"},"whatsappNo":{"dataType":"string"},"parentPhnNo":{"dataType":"string"},"parentName":{"dataType":"string"},"timing":{"dataType":"string"},"joiningDate":{"dataType":"datetime"},"subjectsTaken":{"dataType":"array","array":{"dataType":"string"}},"pastScore":{"dataType":"double"},"studentStatus":{"dataType":"string"},"boardType":{"dataType":"string"},"schoolName":{"dataType":"string"},"classNo":{"dataType":"string"},"name":{"dataType":"string"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "%24Result.DefaultSelection_Prisma.%24TransactionsListPayload_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"transactionMode":{"dataType":"string","required":true},"modeOfPayment":{"dataType":"string","required":true},"amount":{"dataType":"double","required":true},"dateOfPayment":{"dataType":"datetime","required":true},"category":{"dataType":"string","required":true},"description":{"dataType":"string","required":true},"itemName":{"dataType":"string","required":true},"id":{"dataType":"double","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransactionsList": {
        "dataType": "refAlias",
        "type": {"ref":"%24Result.DefaultSelection_Prisma.%24TransactionsListPayload_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PageResponse_TransactionsList_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"items":{"dataType":"array","array":{"dataType":"refAlias","ref":"TransactionsList"},"required":true},"totalCount":{"dataType":"double","required":true}},"validators":{}},
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
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
        app.put('/loginregister/login',
            ...(fetchMiddlewares<RequestHandler>(LoginRegisterController)),
            ...(fetchMiddlewares<RequestHandler>(LoginRegisterController.prototype.getSelectorList)),

            function LoginRegisterController_getSelectorList(request: any, response: any, next: any) {
            const args = {
                    pack: {"in":"body","name":"pack","required":true,"ref":"loginInterface"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new LoginRegisterController();


              const promise = controller.getSelectorList.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/selector/getlist',
            ...(fetchMiddlewares<RequestHandler>(OptionmasterController)),
            ...(fetchMiddlewares<RequestHandler>(OptionmasterController.prototype.getSelectorList)),

            function OptionmasterController_getSelectorList(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new OptionmasterController();


              const promise = controller.getSelectorList.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/selector/update/:id',
            ...(fetchMiddlewares<RequestHandler>(OptionmasterController)),
            ...(fetchMiddlewares<RequestHandler>(OptionmasterController.prototype.updateSelector)),

            function OptionmasterController_updateSelector(request: any, response: any, next: any) {
            const args = {
                    id: {"in":"path","name":"id","required":true,"dataType":"string"},
                    pack: {"in":"body","name":"pack","required":true,"ref":"OptionsMasterUpdate"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new OptionmasterController();


              const promise = controller.updateSelector.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/student/all/items',
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController)),
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController.prototype.getAllStudents)),

            function StudentmanagementController_getAllStudents(request: any, response: any, next: any) {
            const args = {
                    Pagination: {"in":"query","name":"Pagination","dataType":"any"},
                    Filters: {"in":"query","name":"Filters","dataType":"array","array":{"dataType":"any"}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new StudentmanagementController();


              const promise = controller.getAllStudents.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/student/getbyname',
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController)),
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController.prototype.getStudentByName)),

            function StudentmanagementController_getStudentByName(request: any, response: any, next: any) {
            const args = {
                    vlv: {"in":"body","name":"vlv","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"searchIput":{"dataType":"string","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new StudentmanagementController();


              const promise = controller.getStudentByName.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/student/:id',
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController)),
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController.prototype.getStudentById)),

            function StudentmanagementController_getStudentById(request: any, response: any, next: any) {
            const args = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new StudentmanagementController();


              const promise = controller.getStudentById.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/student/create',
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController)),
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController.prototype.createStudent)),

            function StudentmanagementController_createStudent(request: any, response: any, next: any) {
            const args = {
                    pack: {"in":"body","name":"pack","required":true,"ref":"studentCreateInterface"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new StudentmanagementController();


              const promise = controller.createStudent.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/student/:id',
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController)),
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController.prototype.updateStudentById)),

            function StudentmanagementController_updateStudentById(request: any, response: any, next: any) {
            const args = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
                    pack: {"in":"body","name":"pack","required":true,"ref":"studentUpdateInterface"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new StudentmanagementController();


              const promise = controller.updateStudentById.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/student/:id',
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController)),
            ...(fetchMiddlewares<RequestHandler>(StudentmanagementController.prototype.deleteStudentById)),

            function StudentmanagementController_deleteStudentById(request: any, response: any, next: any) {
            const args = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new StudentmanagementController();


              const promise = controller.deleteStudentById.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/transaction/all/items',
            ...(fetchMiddlewares<RequestHandler>(transactionlistController)),
            ...(fetchMiddlewares<RequestHandler>(transactionlistController.prototype.getAllTransaction)),

            function transactionlistController_getAllTransaction(request: any, response: any, next: any) {
            const args = {
                    Pagination: {"in":"query","name":"Pagination","dataType":"any"},
                    Filters: {"in":"query","name":"Filters","dataType":"array","array":{"dataType":"any"}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new transactionlistController();


              const promise = controller.getAllTransaction.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/transaction/:id',
            ...(fetchMiddlewares<RequestHandler>(transactionlistController)),
            ...(fetchMiddlewares<RequestHandler>(transactionlistController.prototype.getTransactionById)),

            function transactionlistController_getTransactionById(request: any, response: any, next: any) {
            const args = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new transactionlistController();


              const promise = controller.getTransactionById.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/transaction/create',
            ...(fetchMiddlewares<RequestHandler>(transactionlistController)),
            ...(fetchMiddlewares<RequestHandler>(transactionlistController.prototype.createStudent)),

            function transactionlistController_createStudent(request: any, response: any, next: any) {
            const args = {
                    pack: {"in":"body","name":"pack","required":true,"ref":"transactionlistInterface"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new transactionlistController();


              const promise = controller.createStudent.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/transaction/:id',
            ...(fetchMiddlewares<RequestHandler>(transactionlistController)),
            ...(fetchMiddlewares<RequestHandler>(transactionlistController.prototype.updateTransactionById)),

            function transactionlistController_updateTransactionById(request: any, response: any, next: any) {
            const args = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
                    pack: {"in":"body","name":"pack","required":true,"ref":"transactionlistUpdateInterface"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new transactionlistController();


              const promise = controller.updateTransactionById.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/transaction/:id',
            ...(fetchMiddlewares<RequestHandler>(transactionlistController)),
            ...(fetchMiddlewares<RequestHandler>(transactionlistController.prototype.deleteStudentById)),

            function transactionlistController_deleteStudentById(request: any, response: any, next: any) {
            const args = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new transactionlistController();


              const promise = controller.deleteStudentById.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function isController(object: any): object is Controller {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }

    function promiseHandler(controllerObj: any, promise: any, response: any, successStatus: any, next: any) {
        return Promise.resolve(promise)
            .then((data: any) => {
                let statusCode = successStatus;
                let headers;
                if (isController(controllerObj)) {
                    headers = controllerObj.getHeaders();
                    statusCode = controllerObj.getStatus() || statusCode;
                }

                // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

                returnHandler(response, statusCode, data, headers)
            })
            .catch((error: any) => next(error));
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function returnHandler(response: any, statusCode?: number, data?: any, headers: any = {}) {
        if (response.headersSent) {
            return;
        }
        Object.keys(headers).forEach((name: string) => {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            response.status(statusCode || 200)
            data.pipe(response);
        } else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        } else {
            response.status(statusCode || 204).end();
        }
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function responder(response: any): TsoaResponse<HttpStatusCodeLiteral, unknown>  {
        return function(status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    };

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function getValidatedArgs(args: any, request: any, response: any): any[] {
        const fieldErrors: FieldErrors  = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'queries':
                    return validationService.ValidateParam(args[key], request.query, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'formData':
                    if (args[key].dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.file, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    } else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.files, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    } else {
                        return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    }
                case 'res':
                    return responder(response);
            }
        });

        if (Object.keys(fieldErrors).length > 0) {
            throw new ValidateError(fieldErrors, '');
        }
        return values;
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
