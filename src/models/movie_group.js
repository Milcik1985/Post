import mongoose from "mongoose";

const moviesListSchema = new mongoose.Schema({
  id: { type: String, required: true },
  genre: { type: String, required: true },
  movies_ids: { type: Array },
  movies: [
    {
      id: { type: String, required: true },
      imageUrl: { type: String, required: true },
      title: { type: String, required: true },
      genre: { type: String, required: true },
      rating: { type: Number, required: true },
    },
  ],
});

const moviesList = mongoose.model("MovieList", moviesListSchema);

export default moviesList;
