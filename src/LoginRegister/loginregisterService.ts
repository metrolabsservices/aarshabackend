import { PrismaClient } from "@prisma/client";
import {
  loginInterface,
  loginregisterInterface,
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
}
