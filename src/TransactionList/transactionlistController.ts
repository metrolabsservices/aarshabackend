import {
  Body,
  Controller,
  Delete,
  Get,
  Path,
  Post,
  Put,
  Query,
  Route,
  Tags,
} from "tsoa";
import { transactionlistService } from "./transactionlistService";
import { TransactionsList } from "@prisma/client";
import { PageResponse } from "../Interfaces/PageInfo";
import { ErrorStore } from "../Interfaces/errorHandling";
import {
  transactionlistInterface,
  transactionlistUpdateInterface,
} from "../Interfaces/transactionlistInterface";
import { ServiceResponse } from "../Interfaces/studentsInterface";

@Tags("Expanses Transactions")
@Route("transaction")
export class transactionlistController extends Controller {
  @Get("all/items")
  public async getAllTransaction(
    @Query() Pagination?: any,
    @Query() Filters?: any[]
  ): Promise<PageResponse<TransactionsList> | ErrorStore> {
    console.log(
      "------------- Controller is running ---------------",
      Pagination,
      Filters
    );
    const serv = new transactionlistService();
    var out = await serv.getAllTransactions();

    if (out instanceof Error) {
      this.setStatus(404);
      return { ErrorMessage: out.message };
    }
    this.setStatus(201);
    return out;
  }

  @Get("{id}")
  public async getTransactionById(
    @Path() id: number
  ): Promise<TransactionsList | ErrorStore> {
    console.log("------------- Controller is running ---------------");
    const serv = new transactionlistService();
    var out = await serv.getTransactionById(id);
    if (out instanceof Error) {
      this.setStatus(404);
      return { ErrorMessage: out.message };
    }
    this.setStatus(201);
    return out;
  }

  @Post("create")
  public async createStudent(
    @Body() pack: transactionlistInterface
  ): Promise<ServiceResponse | ErrorStore> {
    console.log("------------- Controller is running ---------------");
    const serv = new transactionlistService();
    var out = await serv.createTransaction(pack);
    if (out instanceof Error) {
      this.setStatus(404);
      return { ErrorMessage: out.message };
    }
    this.setStatus(201);
    return out;
  }

  @Put("{id}")
  public async updateTransactionById(
    @Path() id: number,
    @Body() pack: transactionlistUpdateInterface
  ): Promise<String | ErrorStore> {
    console.log("------------- Controller is running ---------------");
    const serv = new transactionlistService();
    var out = await serv.updateTransactionById(id, pack);
    if (out instanceof Error) {
      this.setStatus(404);
      return { ErrorMessage: out.message };
    }
    this.setStatus(201);
    return out;
  }

  @Delete("{id}")
  public async deleteStudentById(
    @Path() id: number
  ): Promise<String | ErrorStore> {
    console.log("------------- Controller is running ---------------");
    const serv = new transactionlistService();
    var out = await serv.deleteTransactionById(id);
    if (out instanceof Error) {
      this.setStatus(404);
      return { ErrorMessage: out.message };
    }
    this.setStatus(201);
    return out;
  }
}
