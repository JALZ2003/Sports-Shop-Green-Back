import { Router } from "express";
import productsRouter from "../routers/products.js";

const indexRouter = Router();

indexRouter.use("/products", productsRouter);

export default indexRouter;
