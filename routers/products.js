// bookshop
import { Router } from "express";

// Controllers
import read from "../controllers/products/read.js";
import readAdmi from "../controllers/products/readAdmi.js";
import read_one from "../controllers/products/read_one.js";
import destroy from "../controllers/products/destroy.js";
import update from "../controllers/products/update.js";

// Middlewares
import passport from '../middlewares/passport.js';
import is_creator_or_admin from "../middlewares/is_creator_or_admin.js";
import validator from '../middlewares/validator.js';
import add_creator_in_product from "../middlewares/add_creator_in_product.js";

// Schema
import schemaProduct from '../schemas/products/create.js';
import create from "../controllers/products/create.js";

// Router
const productsRouter = Router();

productsRouter.get("/", read);
productsRouter.get("/admi", readAdmi);
productsRouter.post('/', passport.authenticate('jwt', { session: false }), is_creator_or_admin, validator(schemaProduct), add_creator_in_product, create);
productsRouter.post('/:id', read_one);
productsRouter.post('/destroy/:id', passport.authenticate('jwt', { session: false }), is_creator_or_admin, destroy);
productsRouter.post('/update/:id', passport.authenticate('jwt', { session: false }), is_creator_or_admin, update);

export default productsRouter;