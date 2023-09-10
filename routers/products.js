// bookshop
import { Router } from "express";

// Controllers
import read from "../controllers/products/read.js";
import readAdmi from "../controllers/products/readAdmi.js";
import read_one from "../controllers/products/read_one.js";
import destroy from "../controllers/products/destroy.js";

// Middlewares
import passport from '../middlewares/passport.js';
import is_creator_or_admin from "../middlewares/is_creator_or_admin.js";

// Router
const productsRouter = Router();

productsRouter.get("/", read);
productsRouter.get("/admi", readAdmi);
productsRouter.post('/:id', read_one);
productsRouter.post('/destroy/:id', passport.authenticate('jwt', { session: false }), is_creator_or_admin, destroy);


export default productsRouter;
