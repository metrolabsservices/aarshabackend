import { filterInterface } from "../Interfaces/filterInterface";

export const feeFilter = async (data: any | undefined) => {
  if (typeof data == "undefined") {
    return { where: {}, res: false };
  } else {
    let source: any = [];
    data.map((i: filterInterface) => {
      if (i.operation === "combinedSearch") {
        source.push({ [i.key]: { contains: i.value, mode: "insensitive" } });
      }
    });
    return { where: { OR: source }, res: true };
  }
};

export const trxFilter = async (data: any | undefined) => {
  if (typeof data == "undefined") {
    return { data: { where: {} }, status: false };
  } else {
    let isFiltered = { data: { where: {} }, status: false };
    isFiltered =
      data.type === "number"
        ? {
            data: { where: { id: { equals: parseInt(data.value) } } },
            status: true,
          }
        : {
            data: {
              where: {
                itemName: { contains: data.value, mode: "insensitive" },
              },
            },
            status: true,
          };
    return isFiltered;
  }
};

export const trxChartFilter = async (pack: any) => {
  console.log(pack, "data in Pie Chart ");
};
