// thing.controller.ts
import { Get, Post, Res, Params, Body } from "@reflet/express";
import { Response } from "express";

export class CategoriesController {
  @Get("/things")
  async list(@Res res: Response) {
    // const things = await db.collection("things").find({});
    // res.send(things);
  }

  @Get("/things/:id")
  async get(@Params("id") id: string, @Res res: Response) {
    // const thing = await db.collection("things").find({ id });
    // res.send(thing);
  }
}
