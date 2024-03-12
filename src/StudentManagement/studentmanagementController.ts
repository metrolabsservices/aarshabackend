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
import { StudentmanagementService } from "./studentmanagementService";
import { ErrorStore } from "../Interfaces/errorHandling";
import {
  ServiceResponse,
  studentCreateInterface,
  studentUpdateInterface,
} from "../Interfaces/studentsInterface";
import { PageResponse } from "../Interfaces/PageInfo";
import { Student } from "@prisma/client";

@Tags("Student Management")
@Route("student")
export class StudentmanagementController extends Controller {
  @Get("all/items")
  public async getAllStudents(
    @Query() Pagination?: any,
    @Query() Filters?: any[]
  ): Promise<PageResponse<Student> | ErrorStore> {
    console.log("------------- Controller is running ---------------");
    const serv = new StudentmanagementService();
    var out = await serv.getAllStudents({ Pagination, Filters });

    if (out instanceof Error) {
      this.setStatus(404);
      return { ErrorMessage: out.message };
    }
    this.setStatus(201);
    return out;
  }

  @Post("getbyname")
  public async getStudentByName(
    @Body() vlv: { searchIput: string }
  ): Promise<any | ErrorStore> {
    console.log("------------- Controller is running ---------------", vlv);
    const serv = new StudentmanagementService();
    var out = await serv.getAllByName(vlv.searchIput);
    if (out instanceof Error) {
      this.setStatus(404);
      return { ErrorMessage: out.message };
    }
    this.setStatus(201);
    return out;
  }

  @Get("{id}")
  public async getStudentById(
    @Path() id: number
  ): Promise<Student | ErrorStore> {
    console.log("------------- Controller is running ---------------");
    const serv = new StudentmanagementService();
    var out = await serv.getStudentById(id);
    if (out instanceof Error) {
      this.setStatus(404);
      return { ErrorMessage: out.message };
    }
    this.setStatus(201);
    return out;
  }

  @Post("create")
  public async createStudent(
    @Body() pack: studentCreateInterface
  ): Promise<ServiceResponse | ErrorStore> {
    console.log("------------- Controller is running ---------------");
    const serv = new StudentmanagementService();
    var out = await serv.createStudent(pack);
    if (out instanceof Error) {
      this.setStatus(404);
      return { ErrorMessage: out.message };
    }
    this.setStatus(201);
    return out;
  }

  @Put("{id}")
  public async updateStudentById(
    @Path() id: number,
    @Body() pack: studentUpdateInterface
  ): Promise<String | ErrorStore> {
    console.log("------------- Controller is running ---------------", pack);
    const serv = new StudentmanagementService();
    var out = await serv.updateStudentById(id, pack);
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
    const serv = new StudentmanagementService();
    var out = await serv.deleteStudentById(id);
    if (out instanceof Error) {
      this.setStatus(404);
      return { ErrorMessage: out.message };
    }
    this.setStatus(201);
    return out;
  }
}
