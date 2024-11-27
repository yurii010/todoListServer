import { sequelize } from "../connect.js";
import { DataTypes } from "sequelize";

sequelize.authenticate();

const Token = sequelize.define("tokens", {
  tid: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  uid: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  token: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("Token table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

export { Token };
