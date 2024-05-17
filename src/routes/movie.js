import express from "express";
import {
  CREATE_MOVIE,
  GET_ALL_MOVIES,
  GET_SORTED_BY_RATING_MOVIES,
  GET_MOVIE_BY_ID,
  // DELETE_ALL_MOVIES,
  DELETE_MOVIE,
  GET_10_MOVIES,
  UPDATE_MOVIE_BY_ID,
} from "../controllers/movie.js";
import validData from "../middlewares/validation.js";
import movieValidationSchema from "../validationSchema/movie.js";
// import auth from "../middlewares/auth.js";
const router = express.Router();
import authUser from "../middlewares/auth.js";

router.post("/movies", validData(movieValidationSchema), CREATE_MOVIE);

router.get("/movies", authUser, GET_ALL_MOVIES);

router.get("/sortedMovies", GET_SORTED_BY_RATING_MOVIES);

// router.delete("/movies", DELETE_ALL_MOVIES);

router.delete("/movies/:id", DELETE_MOVIE);

router.get("/movies/:id", GET_MOVIE_BY_ID);

router.get("/limitedMovies", GET_10_MOVIES);

router.put("/moviesUpdate/:id", UPDATE_MOVIE_BY_ID);

export default router;
