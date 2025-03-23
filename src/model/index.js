import sequelize from "../config/database.js";
import User from "./UserModel.js";
import Post from "./PostModel.js";

// Define Associations Here
User.hasMany(Post, { foreignKey: "userId", onDelete: "CASCADE" });
Post.belongsTo(User, { foreignKey: "userId" });

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected...");
    await sequelize.sync({ alter: true }); // Sync DB schema
  } catch (error) {
    console.error("Database connection error:", error.message);
  }
};

export { sequelize, connectDB, User, Post };
