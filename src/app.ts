// src/app.ts
import express, {
  json,
  urlencoded,
  Response as ExResponse,
  Request as ExRequest,
} from "express";
const cors = require("cors");
import { RegisterRoutes } from "../build/routes";
import swaggerUi from "swagger-ui-express";
export const app = express();

// Use body parser to read sent json payloads
app.use(cors());
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());
app.use("/swagger.json", express.static("./build/swagger.json"));
app.use(
  "/swagger",
  swaggerUi.serve,
  async (_req: ExRequest, res: ExResponse) => {
    return res.send(
      swaggerUi.generateHTML(await import("../build/swagger.json"))
    );
  }
);

RegisterRoutes(app);
