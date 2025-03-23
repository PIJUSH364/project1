import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Post from "./PostModel.js";
const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: sequelize.fn("now"),
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: sequelize.fn("now"),
    allowNull: false,
  },
});

export default User;
