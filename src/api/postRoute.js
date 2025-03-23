import express from "express";
import Post from "../model/PostModel.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("post route...");
});

router.post("/add_post", async (req, res) => {
  try {
    const { title, description, userId } = req.body;

    const newPost = await Post.create({ title, description, userId });

    res.send({
      message: "Post created successfully",
      data: newPost,
    });
  } catch (error) {
    res.status(400).send({
      message: "not able to create post",
    });
    console.log(error.message);
  }
});

export default router;
