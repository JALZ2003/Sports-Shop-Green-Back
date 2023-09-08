import { Router } from "express";
import read from "../controllers/products/read.js";

const productsRouter = Router();

productsRouter.get("/", read);

export default productsRouter;
