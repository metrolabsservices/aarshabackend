"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = void 0;
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const studentmanagementController_1 = require("./../src/StudentManagement/studentmanagementController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "feeDetailsInterface": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "studentId": { "dataType": "double", "required": true }, "paidBy": { "dataType": "string", "required": true }, "dateOfPaid": { "dataType": "datetime", "required": true }, "amount": { "dataType": "double", "required": true }, "id": { "dataType": "double", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "subjectStatisticsInterface": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "subjectScores": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "studentId": { "dataType": "double", "required": true }, "subjectName": { "dataType": "string", "required": true }, "id": { "dataType": "double", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "studentInterface": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "subjectStatistics": { "dataType": "union", "subSchemas": [{ "dataType": "array", "array": { "dataType": "refAlias", "ref": "subjectStatisticsInterface" } }, { "dataType": "enum", "enums": [null] }], "required": true }, "feeDetails": { "dataType": "union", "subSchemas": [{ "dataType": "array", "array": { "dataType": "refAlias", "ref": "feeDetailsInterface" } }, { "dataType": "enum", "enums": [null] }], "required": true }, "feeCharge": { "dataType": "double", "required": true }, "guardianPhoneNumber": { "dataType": "string", "required": true }, "guardianName": { "dataType": "string", "required": true }, "duration": { "dataType": "string", "required": true }, "joiningDate": { "dataType": "datetime", "required": true }, "subjectsAcquired": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "previousScore": { "dataType": "double", "required": true }, "status": { "dataType": "string", "required": true }, "boardType": { "dataType": "string", "required": true }, "schoolName": { "dataType": "string", "required": true }, "gradeNumber": { "dataType": "string", "required": true }, "name": { "dataType": "string", "required": true }, "id": { "dataType": "double", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PageResponse_studentInterface_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "items": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "studentInterface" }, "required": true }, "totalCount": { "dataType": "double", "required": true } }, "validators": {} },
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
    "studentCreateInterface": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "feeCharge": { "dataType": "double", "required": true }, "guardianPhoneNumber": { "dataType": "string", "required": true }, "guardianName": { "dataType": "string", "required": true }, "duration": { "dataType": "string", "required": true }, "joiningDate": { "dataType": "datetime", "required": true }, "subjectsAcquired": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "previousScore": { "dataType": "double", "required": true }, "status": { "dataType": "string", "required": true }, "boardType": { "dataType": "string", "required": true }, "schoolName": { "dataType": "string", "required": true }, "gradeNumber": { "dataType": "string", "required": true }, "name": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "studentUpdateInterface": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "feeCharge": { "dataType": "double" }, "guardianPhoneNumber": { "dataType": "string" }, "guardianName": { "dataType": "string" }, "duration": { "dataType": "string" }, "joiningDate": { "dataType": "datetime" }, "subjectsAcquired": { "dataType": "array", "array": { "dataType": "string" } }, "previousScore": { "dataType": "double" }, "status": { "dataType": "string" }, "boardType": { "dataType": "string" }, "schoolName": { "dataType": "string" }, "gradeNumber": { "dataType": "string" }, "name": { "dataType": "string" } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new runtime_1.ValidationService(models);
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.get('/student/all/items', ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController)), ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController.prototype.getAllStudents)), function StudentmanagementController_getAllStudents(request, response, next) {
        const args = {
            Pagination: { "in": "query", "name": "Pagination", "dataType": "any" },
            Filters: { "in": "query", "name": "Filters", "dataType": "array", "array": { "dataType": "any" } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new studentmanagementController_1.StudentmanagementController();
            const promise = controller.getAllStudents.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/student/getbyname', ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController)), ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController.prototype.getStudentByName)), function StudentmanagementController_getStudentByName(request, response, next) {
        const args = {
            searchName: { "in": "body", "name": "searchName", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new studentmanagementController_1.StudentmanagementController();
            const promise = controller.getStudentByName.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/student/:id', ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController)), ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController.prototype.getStudentById)), function StudentmanagementController_getStudentById(request, response, next) {
        const args = {
            id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new studentmanagementController_1.StudentmanagementController();
            const promise = controller.getStudentById.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/student/create', ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController)), ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController.prototype.createStudent)), function StudentmanagementController_createStudent(request, response, next) {
        const args = {
            pack: { "in": "body", "name": "pack", "required": true, "ref": "studentCreateInterface" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new studentmanagementController_1.StudentmanagementController();
            const promise = controller.createStudent.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/student/:id', ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController)), ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController.prototype.updateStudentById)), function StudentmanagementController_updateStudentById(request, response, next) {
        const args = {
            id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
            pack: { "in": "body", "name": "pack", "required": true, "ref": "studentUpdateInterface" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new studentmanagementController_1.StudentmanagementController();
            const promise = controller.updateStudentById.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/student/:id', ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController)), ...((0, runtime_1.fetchMiddlewares)(studentmanagementController_1.StudentmanagementController.prototype.deleteStudentById)), function StudentmanagementController_deleteStudentById(request, response, next) {
        const args = {
            id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new studentmanagementController_1.StudentmanagementController();
            const promise = controller.deleteStudentById.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function isController(object) {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }
    function promiseHandler(controllerObj, promise, response, successStatus, next) {
        return Promise.resolve(promise)
            .then((data) => {
            let statusCode = successStatus;
            let headers;
            if (isController(controllerObj)) {
                headers = controllerObj.getHeaders();
                statusCode = controllerObj.getStatus() || statusCode;
            }
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            returnHandler(response, statusCode, data, headers);
        })
            .catch((error) => next(error));
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function returnHandler(response, statusCode, data, headers = {}) {
        if (response.headersSent) {
            return;
        }
        Object.keys(headers).forEach((name) => {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            response.status(statusCode || 200);
            data.pipe(response);
        }
        else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        }
        else {
            response.status(statusCode || 204).end();
        }
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function responder(response) {
        return function (status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    }
    ;
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function getValidatedArgs(args, request, response) {
        const fieldErrors = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'queries':
                    return validationService.ValidateParam(args[key], request.query, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'formData':
                    if (args[key].dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.file, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                    else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.files, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                    else {
                        return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                case 'res':
                    return responder(response);
            }
        });
        if (Object.keys(fieldErrors).length > 0) {
            throw new runtime_1.ValidateError(fieldErrors, '');
        }
        return values;
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
exports.RegisterRoutes = RegisterRoutes;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
