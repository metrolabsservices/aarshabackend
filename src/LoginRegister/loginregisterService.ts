import { LoginRegister, PrismaClient } from "@prisma/client";
import {
  loginInterface,
  loginregisterInterface,
  loginregisterUpdateInterface,
} from "../Interfaces/loginregisterInterface";

export class LoginRegisterServices {
  public async checkLogin(pack: loginInterface): Promise<any | Error> {
    const prisma = new PrismaClient();
    const loginCheckMail = async () => {
      const dbCall = await prisma.loginRegister.findUniqueOrThrow({
        where: {
          userMail: pack.userMail,
          //   password: pack.password,
        },
      });
      return dbCall;
    };
    const loginCheckPassword = async (newPack: loginregisterInterface) => {
      if (newPack.password === pack.password) {
        if (newPack.isApproved) {
          //   console.log("Login clear ");
          return newPack;
        }
        return new Error("Not Approved");
      }
      return new Error("Password Incorrect");
      //   console.log(newPack, pack, newPack.password === pack.password);
    };
    return loginCheckMail()
      .then((result) => {
        console.log("------", result, "---------");
        return loginCheckPassword(result);
      })
      .catch(() => {
        // console.log("*******", err, "********");
        return new Error("Email not Found");
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  }
  public async getAllLogins(): Promise<LoginRegister[] | Error> {
    const prisma = new PrismaClient();
    const getLogins = async () =>
      await prisma.loginRegister.findMany({
        orderBy: {
          id: "asc",
        },
      });
    return getLogins()
      .then((result) => {
        if (result.length === 0) {
          return new Error("No Data Found");
        }
        return result;
      })
      .catch(() => {
        // console.log("*******", err, "********");
        return new Error("Failed to Get data");
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  }
  public async updateRecord(
    id: number,
    pack: loginregisterUpdateInterface
  ): Promise<String | Error> {
    const prisma = new PrismaClient();
    const updateId = async () =>
      await prisma.loginRegister.updateMany({
        where: {
          id: id,
        },
        data: { ...pack },
      });
    return updateId()
      .then((result) => {
        console.log(result);
        if (result.count == 1) {
          return "Record Updated Successfully";
        }
        return Error("Record Not Available to update");
      })
      .catch(() => {
        // console.log("*******", err, "********");
        return new Error("Failed to Get data");
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  }
  public async deleteRecord(id: number): Promise<String | Error> {
    const prisma = new PrismaClient();
    const deleteId = async () =>
      await prisma.loginRegister.deleteMany({
        where: {
          id: id,
        },
      });
    return deleteId()
      .then((result) => {
        console.log(result);
        if (result.count == 1) {
          return "Record Deleted Successfully";
        }
        return Error("Record Not Available to delete");
      })
      .catch(() => {
        // console.log("*******", err, "********");
        return new Error("Failed to Get data");
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  }
}
