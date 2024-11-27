import userController from "./userController.js";
import { Router } from "express";

const userRouter = new Router();

userRouter.post("/authorization", userController.authorization);
userRouter.post("/registration", userController.registration);
userRouter.delete("/logout", userController.logout);
userRouter.post('/getData', userController.getData)

export default userRouter;
