import express from "express";
import { CREATE_MOVIE_RECOMMENDATION, 
    GET_ALL_MOVIE_RECOMMENDATIONS, 
    GET_SORTED_BY_RATING_MOVIE_RECOMMENDATIONS, 
    DELETE_ALL_MOVIE_RECOMMENDATIONS, 
    GET_MOVIE_RECOMMENDATION_BY_ID,
    GET_10_MOVIE_RECOMMENDATIONS,
    UPDATE_MOVIE_RECOMMENDATION_BY_ID  } from "../controllers/movie.js";
const router = express.Router();



router.post("/MovieRecommendation", CREATE_MOVIE_RECOMMENDATION);

// 3. Parašyt endpointą kuris parsiųstu visas išsaugotas rekomendacijas;
router.get("/MovieRecommendations", GET_ALL_MOVIE_RECOMMENDATIONS);

// 4. Parašyt endpointą kuris gražintu visas rekomendacijas išrikiuotas mažėjimo tvarka pagal reitingą;
router.get("/sortedMovieRecommendations", GET_SORTED_BY_RATING_MOVIE_RECOMMENDATIONS);

// 5. Parašyt endpointą kuris ištrintų visas rekomendacijas;
router.delete("/movieRecommendations", DELETE_ALL_MOVIE_RECOMMENDATIONS);

// 1. Prie buvusios  užduoties reikia pridėti getById endpointą;
router.get("/movieRecommendation/:movieRecommendationId", GET_MOVIE_RECOMMENDATION_BY_ID);

router.get("/limitedMovieRecommendations", GET_10_MOVIE_RECOMMENDATIONS);

router.put("/movieRecommendationUpdate/:id", UPDATE_MOVIE_RECOMMENDATION_BY_ID)

export default router;