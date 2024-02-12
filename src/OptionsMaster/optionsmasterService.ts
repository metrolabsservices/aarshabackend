import { OptionsMaster, PrismaClient } from "@prisma/client";
import { OptionsMasterUpdate } from "../Interfaces/optionsMasterInterface";

export class OptionsMasterServices {
  public getOptions(): Promise<any | Error | OptionsMaster> {
    const prisma = new PrismaClient();
    const getAllOptions = async () => {
      const dbCall = await prisma.optionsMaster.findMany();
      return dbCall;
    };
    return getAllOptions()
      .then((result) => {
        console.log(result);
        if (result.length === 0) {
          return new Error("Data Not Found");
        }
        return result[0];
      })
      .catch((err) => {
        console.log(err);
        return new Error("Failed to retriev details");
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  }

  public updateOptions(
    id: number,
    pack: OptionsMasterUpdate
  ): Promise<any | Error | String> {
    const prisma = new PrismaClient();
    const updateSpecificOption = async () => {
      const dbCall = await prisma.optionsMaster.updateMany({
        where: {
          id: id,
        },
        data: { ...pack },
      });
      return dbCall;
    };
    return updateSpecificOption()
      .then((result) => {
        console.log(result);
        return "Update Successfully";
      })
      .catch((err) => {
        console.log(err);
        return new Error("Failed to retriev details");
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  }
}
