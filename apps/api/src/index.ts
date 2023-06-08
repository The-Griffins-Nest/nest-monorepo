import { register } from "@reflet/express";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import { Controller } from "./router";

const app = express();
app.use(bodyParser.json());
dotenv.config();

const port = 4004;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

register(app, [Controller]);
