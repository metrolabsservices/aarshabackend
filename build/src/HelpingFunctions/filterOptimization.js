"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterOptimization = void 0;
const filterOptimization = (data) => {
    //   console.log(data);
    if (typeof data == "undefined") {
        return { where: {} };
    }
    else {
        let andSource = [];
        let orSource = [];
        data.map((i) => {
            if (i.operation == "search") {
                if (typeof i.value == "string") {
                    andSource.push({ [i.key]: { search: i.value } });
                }
                else if (i.value.length == 1) {
                    andSource.push({ [i.key]: { search: i.value[0] } });
                }
                else if (i.value.length > 1) {
                    let searchText = i.value.join(" | ");
                    andSource.push({ [i.key]: { search: searchText } });
                }
            }
            else if (i.operation == "containsCombined") {
                orSource.push({ [i.key]: { contains: i.value, mode: "insensitive" } });
            }
        });
        console.log("AND set -- ", andSource);
        console.log("OR set -- ", orSource);
        let totalSource = {};
        if (andSource.length > 1 && orSource.length > 1) {
            totalSource["OR"] = orSource;
            totalSource["AND"] = andSource;
        }
        else if (andSource.length > 0 && orSource.length == 0) {
            totalSource["AND"] = andSource;
        }
        else if (andSource.length == 0 && orSource.length > 0) {
            totalSource["OR"] = orSource;
        }
        console.log({ totalSource });
        return { where: Object.assign({}, totalSource) };
    }
};
exports.filterOptimization = filterOptimization;
