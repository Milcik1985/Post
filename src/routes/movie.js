import express from "express";
import { CREATE_MOVIE, 
    GET_ALL_MOVIES, 
    GET_SORTED_BY_RATING_MOVIES, 
    GET_MOVIE_BY_ID,
    DELETE_ALL_MOVIES,
    GET_10_MOVIES,
    UPDATE_MOVIE_BY_ID,  } from "../controllers/movie.js";
const router = express.Router();

router.post("/movies", CREATE_MOVIE);

router.get("/movies", GET_ALL_MOVIES);

router.get("/sortedMovies", GET_SORTED_BY_RATING_MOVIES);

router.delete("/movies", DELETE_ALL_MOVIES);

router.get("/movies/:id", GET_MOVIE_BY_ID);

router.get("/limitedMovies", GET_10_MOVIES);

router.put("/moviesUpdate/:id", UPDATE_MOVIE_BY_ID)

export default router;