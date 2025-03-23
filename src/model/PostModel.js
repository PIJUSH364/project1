import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Post = sequelize.define("post", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
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

export default Post;
