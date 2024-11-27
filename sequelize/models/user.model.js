import { sequelize } from "../connect.js";
import { DataTypes } from "sequelize";

sequelize.authenticate();

const User = sequelize.define("users", {
  uid: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  userEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hashedPassword: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("User table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

export { User };
