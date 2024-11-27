import taskController from "./taskController.js";
import { Router } from "express";

const taskRouter = new Router();

taskRouter.post("/createTask", taskController.createTask);
taskRouter.post("/tasks", taskController.getTasks);
taskRouter.get("/tasks/:id", taskController.getTask);
taskRouter.patch("/changeCompleted/:id", taskController.changeCompleted);
taskRouter.patch("/tasks", taskController.editTask);
taskRouter.delete("/tasks/:id", taskController.deleteTask);

export default taskRouter;