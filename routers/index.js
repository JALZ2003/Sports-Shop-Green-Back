import { Router } from 'express';
import categoriesRouter from './categories.js';

const indexRouter = Router();
indexRouter.use("/categories", categoriesRouter);

export default indexRouter;