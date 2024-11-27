import { DataTypes } from "sequelize";
import { sequelize } from "../connect.js";

sequelize.authenticate();

const Task = sequelize.define("tasks", {
  taskId: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  uid: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  taskTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  taskText: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("Task table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create task : ", error);
  });

export { Task };
