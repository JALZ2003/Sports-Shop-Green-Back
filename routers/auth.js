import { Router } from "express";
//Schema
import registerSchema from "../schemas/auth/register";

let authRouter= Router();
authRouter.post('/register',validator(registerSchema))

export default authRouter;