import userRouter from "./router/userRouter/userRouter.js";
import taskRouter from "./router/taskRouter/taskRouter.js";
import { sequelize } from "./sequelize/connect.js";
import cookieParser from "cookie-parser";
import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/user", userRouter);
app.use("/task", taskRouter);
dotenv.config();

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("http://localhost:8080");
});
