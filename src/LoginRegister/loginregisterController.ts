import { Body, Controller, Put, Route, Tags } from "tsoa";
import { LoginRegisterServices } from "./loginregisterService";
import { loginInterface } from "../Interfaces/loginregisterInterface";
import { ErrorStore } from "../Interfaces/errorHandling";

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
}
