import express from "express";
import { signIn, signUp } from "./user.controller.js";
import { validation } from "../../middleware/validation.js";
import { singInSchema, singUpSchema } from "./user.validation.js";
const userRouter = express.Router();

userRouter.post("/signup", validation(singUpSchema), signUp);
userRouter.post("/signin", validation(singInSchema), signIn);

export default userRouter;
