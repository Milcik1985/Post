import express from "express";

import {
  CREATE_MOVIE_GROUP,
  GET_ALL_MOVIES_GROUP,
} from "../controllers/movie_group.js";
import {
  GET_SORTED_BY_RATING_MOVIES,
  DELETE_ALL_LISTS,
  GET_10_MOVIES,
  UPDATE_MOVIE_BY_ID,
  ADD_MOVIES_LIST,
  GET_MOVIES_LIST_BY_ID,
  ADD_MOVIE_TO_LIST,
  GET_ALL_MOVIES_LISTS,
  GET_ALL_MOVIES_IN_LIST,
} from "../controllers/movie_group.js";
const router = express.Router();

router.post("/list/movies", CREATE_MOVIE_GROUP);

router.get("/list/movies", GET_ALL_MOVIES_GROUP);

router.get("/sortedMovies", GET_SORTED_BY_RATING_MOVIES);

router.delete("/list/movies", DELETE_ALL_LISTS);

router.get("/limitedMovies", GET_10_MOVIES);

router.put("/movieUpdate/:id", UPDATE_MOVIE_BY_ID);

router.post("/movies/list", ADD_MOVIES_LIST);

router.get("/movies/lists/:moviesListId", GET_MOVIES_LIST_BY_ID);

router.post("/addMovieToList", ADD_MOVIE_TO_LIST);

router.get("/movies_list_all", GET_ALL_MOVIES_LISTS);

router.get("/movies/lists/:moviesListId", GET_ALL_MOVIES_IN_LIST);

export default router;
