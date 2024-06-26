import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import movieRouter from "./src/routes/movie.js";
import movieGroupRouter from "./src/routes/movie_group.js";
import userRouter from "./src/routes/user.js";
import cartRouter from "./src/routes/cart.js";
import "dotenv/config";

const app = express();

app.use(cors());

app.use(express.json());

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => console.log("Connected to DB"))
  .catch((err) => {
    console.log("err", err);
  });

app.use(movieGroupRouter);
app.use(movieRouter);
app.use(userRouter);
app.use(cartRouter);

app.use((req, res) => {
  return res.status(404).json({ status: "Endpoint does not exist" });
});

app.listen(process.env.PORT, () => {
  console.log(`app runs on port ${process.env.PORT}`);
});
