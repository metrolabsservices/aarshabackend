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
