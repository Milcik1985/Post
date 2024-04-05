import mongoose from "mongoose";

const moviesListSchema = new mongoose.Schema({
    genre: {type: String, require: true},
    movies_ids: {type: Array},
});

const movieList = mongoose.model("MovieList", moviesListSchema);

export default movieList;