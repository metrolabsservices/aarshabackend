"use strict";
// import { Questions } from "@prisma/client";
// import { ErrorStore } from "../Interfaces/errorHandling";
// import {
//   Body,
//   Controller,
//   Delete,
//   FormField,
//   Get,
//   Path,
//   Post,
//   Put,
//   // Queries,
//   Query,
//   Route,
//   Tags,
//   UploadedFile,
// } from "tsoa";
// @Tags("Question Bank")
// @Route("questions")
// export class productController extends Controller {
//   @Get("{id}")
//   public async getProduct(@Path() id: number): Promise<Questions | ErrorStore> {
//     const productService = new ProductServices();
//     var out = await productService.ProductGet(id);
//     // console.log("++++++++", out, "+++++++++");
//     if (out instanceof Error) {
//       this.setStatus(404);
//       return { ErrorMessage: out.message };
//     }
//     return out;
//   }
//   @Get("getproduct/all")
//   public async getAllProducts(
//     @Query() Filters?: string,
//     @Query() Pagination?: string
//   ): Promise<ProductsMaster[] | ErrorStore> {
//     let pageInfo: pageInfoInterface = {
//       Filters:
//         typeof Filters === "undefined"
//           ? { status: false }
//           : { status: true, data: JSON.parse(Filters) },
//       Paginaton:
//         typeof Pagination === "undefined"
//           ? { status: false }
//           : { status: true, data: "Not Available" },
//     };
//     // console.log(Filters, Pagination, pageInfo);
//     const productService = new ProductServices();
//     var out = await productService.ProductGetAll(pageInfo);
//     // console.log("++++++++", out, "+++++++++");
//     if (out instanceof Error) {
//       this.setStatus(404);
//       return { ErrorMessage: out.message };
//     }
//     return out;
//   }
//   @Post("addproduct")
//   public async addProduct(
//     @Body() data: ProductData
//   ): Promise<ProductsMaster | ErrorStore> {
//     const productService = new ProductServices();
//     var out = await productService.ProductCreate(data);
//     // console.log("++++++++", out, "+++++++++");
//     if (out instanceof Error) {
//       this.setStatus(404);
//       return { ErrorMessage: out.message };
//     }
//     return out;
//   }
//   @Post("addproduct/all")
//   public async addProducts(
//     @UploadedFile() file: Express.Multer.File,
//     @FormField() uploadDate: string
//   ): Promise<String | ErrorStore> {
//     console.log(file, uploadDate);
//     const productService = new ProductServices();
//     var out = await productService.ProductCreateAll(file, uploadDate);
//     // console.log("++++++++", out, "+++++++++");
//     if (out instanceof Error) {
//       this.setStatus(404);
//       return { ErrorMessage: out.message };
//     }
//     return out;
//   }
//   @Put("{id}")
//   public async updateProduct(
//     @Path() id: number,
//     @Body() data: ProductUpdateData
//   ): Promise<ProductsMaster | ErrorStore> {
//     const productService = new ProductServices();
//     var out = await productService.ProductUpdate(id, data);
//     // console.log("++++++++", out, "+++++++++");
//     if (out instanceof Error) {
//       this.setStatus(404);
//       return { ErrorMessage: out.message };
//     }
//     return out;
//   }
//   @Delete("{id}")
//   public async deleteProduct(@Path() id: number): Promise<ErrorStore | string> {
//     const productService = new ProductServices();
//     var out = await productService.ProductDelete(id);
//     // console.log("++++++++", out, "+++++++++");
//     if (out instanceof Error) {
//       this.setStatus(404);
//       return { ErrorMessage: out.message };
//     }
//     return out;
//   }
//   @Delete("deleteproduct/all")
//   public async deleteAllProduct(): Promise<String | ErrorStore> {
//     const productService = new ProductServices();
//     var out = await productService.ProductDeleteAll();
//     // console.log("++++++++", out, "+++++++++");
//     if (out instanceof Error) {
//       this.setStatus(404);
//       return { ErrorMessage: out.message };
//     }
//     return out;
//   }
// }
