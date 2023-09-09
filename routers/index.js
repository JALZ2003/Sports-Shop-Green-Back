
import { Router } from "express";
import productsRouter from "../routers/products.js";
import categoriesRouter from './categories.js';
import authRouter from './auth.js';
import routerStates from "./states.js";
import routerCreators from "./creators.js";

const indexRouter = Router();

indexRouter.use('/products', productsRouter);
indexRouter.use('/auth', authRouter);
indexRouter.use('/categories', categoriesRouter);
indexRouter.use('/states', routerStates);
indexRouter.use('/creators', routerCreators);

export default indexRouter;

