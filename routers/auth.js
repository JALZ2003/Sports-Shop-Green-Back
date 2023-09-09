import { Router } from "express";
import read from "../controllers/auth/read.js";
//Schema
import registerSchema from "../schemas/auth/register.js";
import validator from "../middlewares/validator.js";
import register from "../controllers/auth/register.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";
import signout from "../controllers/auth/signout.js";
import passport from "../middlewares/passport.js";
import readAdmi from "../controllers/auth/readAdmi.js";



let authRouter = Router();
authRouter.post('/register',validator(registerSchema),accountExists, createHash, register);
authRouter.post('/signout', passport.authenticate('jwt', { session: false }), signout);
authRouter.get('/', read);
authRouter.get('/admi', readAdmi);

export default authRouter;