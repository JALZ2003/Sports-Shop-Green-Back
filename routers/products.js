import { Router } from "express";
import read from "../controllers/products/read.js";
import readAdmi from "../controllers/products/readAdmi.js";

const productsRouter = Router();

productsRouter.get("/", read);
productsRouter.get("/admi", readAdmi);


export default productsRouter;
