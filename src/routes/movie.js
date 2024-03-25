const express = require("express");
const { CREATE_MOVIE_RECOMMENDATION, 
    GET_ALL_MOVIE_RECOMMENDATIONS, 
    GET_SORTED_BY_RATING_MOVIE_RECOMMENDATIONS, 
    DELETE_ALL_MOVIE_RECOMMENDATIONS, 
    GET_MOVIE_RECOMMENDATION_BY_ID } = require("../controllers/movie");
const router = express.Router();



router.post("/createMovieRecommendation", CREATE_MOVIE_RECOMMENDATION);

// 3. Parašyt endpointą kuris parsiųstu visas išsaugotas rekomendacijas;
router.get("/getAllMovieRecommendations", GET_ALL_MOVIE_RECOMMENDATIONS);

// 4. Parašyt endpointą kuris gražintu visas rekomendacijas išrikiuotas mažėjimo tvarka pagal reitingą;
router.get("/getSortedByRatingMovieRecommendations", GET_SORTED_BY_RATING_MOVIE_RECOMMENDATIONS);

// 5. Parašyt endpointą kuris ištrintų visas rekomendacijas;
router.delete("/deleteAllMovieRecommendations", DELETE_ALL_MOVIE_RECOMMENDATIONS);

// 1. Prie buvusios  užduoties reikia pridėti getById endpointą;
router.get("/getMovieRecommendationById/:movieRecommendationId", GET_MOVIE_RECOMMENDATION_BY_ID);

module.exports = router;