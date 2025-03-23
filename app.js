import express from "express";
import { connectDB } from "./src/model/index.js";
import userRoutes from "./src/api/userRoute.js";
import postRoutes from "./src/api/postRoute.js";
import morgan from "morgan";
const app = express();

app.use(morgan("dev"));
const PORT = 8002;
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Helth check");
});

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/post", postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
