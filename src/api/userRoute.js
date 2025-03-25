import express from "express";
import Post from "../model/PostModel.js";
import User from "../model/UserModel.js";
import { Op } from "sequelize";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("user route...");
});

router.post("/add_user", async (req, res) => {
  const { name, email } = req.body;

  const newUser = await User.create({ name, email });
  res.send({
    message: "User created successfully",
    data: newUser,
  });
});

router.get("/filter", async (req, res) => {
  try {
    // testing query params
    const { title, description, userId, userName, userEmail } = req.query;

    let postFilter = {};
    if (title) postFilter.title = { [Op.iLike]: `%${title}%` };
    if (description)
      postFilter.description = { [Op.iLike]: `%${description}%` };
    if (userId) postFilter.userId = userId;

    // Construct filters for users
    let userFilter = {};
    if (userName) userFilter.name = { [Op.iLike]: `%${userName}%` };
    if (userEmail) userFilter.email = { [Op.iLike]: `%${userEmail}%` };

    const posts = await Post.findAll({
      where: postFilter,
      include: [
        {
          model: User,
          where: Object.keys(userFilter).length ? userFilter : undefined, // Apply user filter if present
          attributes: ["id", "name", "email"],
        },
      ],
    });

    res.status(200).send({
      message: "Filtered posts fetched successfully",
      data: posts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error fetching filtered posts",
      error: error.message,
    });
  }
});

export default router;
