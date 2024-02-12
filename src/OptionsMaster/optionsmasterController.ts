import { OptionsMaster } from "@prisma/client";
import { Body, Controller, Get, Path, Put, Route, Tags } from "tsoa";
import { OptionsMasterServices } from "./optionsmasterService";
import { OptionsMasterUpdate } from "../Interfaces/optionsMasterInterface";

@Tags("Selectors Master List")
@Route("selector")
export class OptionmasterController extends Controller {
  @Get("getlist")
  public async getSelectorList(): Promise<any | OptionsMaster> {
    console.log("------------- Controller is running ---------------");
    const serv = new OptionsMasterServices();
    var out = await serv.getOptions();
    if (out instanceof Error) {
      this.setStatus(404);
      return { ErrorMessage: out.message };
    }
    this.setStatus(201);
    return out;
  }
  @Put("update/{id}")
  public async updateSelector(
    @Path() id: string,
    @Body() pack: OptionsMasterUpdate
  ): Promise<any | OptionsMaster> {
    console.log("------------- Controller is running ---------------");
    const serv = new OptionsMasterServices();
    var out = await serv.updateOptions(parseInt(id), pack);
    if (out instanceof Error) {
      this.setStatus(404);
      return { ErrorMessage: out.message };
    }
    this.setStatus(201);
    return out;
  }
}
