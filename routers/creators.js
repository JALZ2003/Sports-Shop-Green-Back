// Bookshop
import { Router } from 'express';

// Controllers
import create from '../controllers/creators/create.js';
import read from '../controllers/creators/read.js';

// Middleware
import passport from '../middlewares/passport.js';
import validator from '../middlewares/validator.js';
import is_creator from '../middlewares/is_creator.js';

// Schema
import schemaCreator from '../schemas/creators/create.js';
import exists_creator from '../middlewares/exists_creator.js';

// Router
const routerCreators = Router();

routerCreators.post('/', passport.authenticate('jwt', { session: false }), exists_creator, validator(schemaCreator), create);
routerCreators.post('/:id', is_creator, read);

export default routerCreators;