
import { Router } from "express";
import productsRouter from "../routers/products.js";
import categoriesRouter from './categories.js';
import authRouter from './auth.js';

const indexRouter = Router();

indexRouter.use('/products', productsRouter);
indexRouter.use('/auth', authRouter);
indexRouter.use('/categories', categoriesRouter);

export default indexRouter;

