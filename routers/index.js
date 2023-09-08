import { Router } from 'express';
import categoriesRouter from './categories.js';
import authRouter from './auth.js';

const indexRouter = Router();

indexRouter.use('/auth',authRouter)
indexRouter.use("/categories", categoriesRouter);
export default indexRouter;