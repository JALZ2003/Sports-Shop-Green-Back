import { Router } from "express";
import read from "../controllers/categories/read.js"
import create from "../controllers/categories/create.js";
import update from "../controllers/categories/update.js";
import destroy from "../controllers/categories/destroy.js";
let categoriesRouter =  Router();


categoriesRouter.get('/', read);
categoriesRouter.post('/',create);
categoriesRouter.put('/:id', update);
categoriesRouter.delete('/:id', destroy)

export default categoriesRouter;