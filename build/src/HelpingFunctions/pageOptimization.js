"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationOptimization = void 0;
const paginationOptimization = (data) => {
    // console.log(
    //   `+++++++++++++++++\n${data.pageSize} ${data.current}\n+++++++++++++++++++++++`
    // );
    return {
        take: parseInt(data.pageSize) || 10,
        skip: parseInt(data.current)
            ? (parseInt(data.current) - 1) * (parseInt(data.pageSize) || 0)
            : 0,
    };
};
exports.paginationOptimization = paginationOptimization;
