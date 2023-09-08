import { Router } from "express";
import read from "../controllers/auth/read.js";
//Schema
import registerSchema from "../schemas/auth/register.js";
import validator from "../middlewares/validator.js";
import register from "../controllers/auth/register.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";



let authRouter= Router();
authRouter.post('/register',validator(registerSchema),accountExists, createHash, register)
authRouter.get('/', read);
export default authRouter;