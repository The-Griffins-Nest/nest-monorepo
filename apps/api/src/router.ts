import { Router } from "@reflet/express";
import { CategoriesController } from "./categories.controller";

@Router("/")
@Router.Children(() => [CategoriesController])
export class Controller {}
