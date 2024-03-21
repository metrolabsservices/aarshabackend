import { Body, Controller, Delete, Get, Path, Put, Route, Tags } from "tsoa";
import { LoginRegisterServices } from "./loginregisterService";
import {
  loginInterface,
  loginregisterUpdateInterface,
} from "../Interfaces/loginregisterInterface";
import { ErrorStore } from "../Interfaces/errorHandling";
import { LoginRegister } from "@prisma/client";

@Tags("Logins & Registers")
@Route("loginregister")
export class LoginRegisterController extends Controller {
  @Put("login")
  public async getSelectorList(
    @Body() pack: loginInterface
  ): Promise<any | ErrorStore> {
    console.log("------------- Controller is running ---------------");
    const serv = new LoginRegisterServices();
    var out = await serv.checkLogin(pack);
    if (out instanceof Error) {
      this.setStatus(404);
      return { ErrorMessage: out.message };
    }
    this.setStatus(201);
    return out;
  }

  @Get("all")
  public async getAllLogins(): Promise<LoginRegister[] | ErrorStore> {
    const serv = new LoginRegisterServices();
    var out = await serv.getAllLogins();
    if (out instanceof Error) {
      this.setStatus(404);
      return { ErrorMessage: out.message };
    }
    this.setStatus(201);
    return out;
  }

  @Put("{id}")
  public async updateLogin(
    @Path() id: number,
    @Body() pack: loginregisterUpdateInterface
  ): Promise<String | ErrorStore> {
    const serv = new LoginRegisterServices();
    var out = await serv.updateRecord(id, pack);
    if (out instanceof Error) {
      this.setStatus(404);
      return { ErrorMessage: out.message };
    }
    this.setStatus(201);
    return out;
  }

  @Delete("{id}")
  public async deleteLogin(@Path() id: number): Promise<String | ErrorStore> {
    const serv = new LoginRegisterServices();
    var out = await serv.deleteRecord(id);
    if (out instanceof Error) {
      this.setStatus(404);
      return { ErrorMessage: out.message };
    }
    this.setStatus(201);
    return out;
  }
}
