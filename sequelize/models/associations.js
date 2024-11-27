import { sequelize } from "../connect.js";
import { User } from "./user.model.js";
import { Task } from "./task.model.js";
import { Token } from "./token.model.js";

sequelize.authenticate();

User.hasMany(Task, {
  foreignKey: "uid",
  as: "userTasks",
});

Task.belongsTo(User, {
  foreignKey: "uid",
  as: "userTask",
});

User.hasMany(Token, {
  foreignKey: "uid",
  as: "userTids",
});

Token.belongsTo(User, {
  foreignKey: "uid",
  as: "userTid",
});

sequelize
  .sync()
  .then(() => {
    console.log("Connection between tables create successfully!");
  })
  .catch((error) => {
    console.error("Unable to create connection: ", error);
  });
