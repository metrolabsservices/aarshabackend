import { Controller, Get, Path, Route, Tags } from "tsoa";
import { StudentmanagementService } from "./studentmanagementService";

@Tags("Student Management")
@Route("student")
export class StudentmanagementController extends Controller {
  @Get("{id}")
  public getStudentById(@Path() id: number): Promise<any> {
    this.setStatus(201);
    console.log("------------- Controller is running ---------------");
    return new StudentmanagementService().getStudentById(id);
  }
}
