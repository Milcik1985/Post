import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
  id: { type: String, required: true },
  imageUrl: { type: String, required: true },
  title: { type: String, required: true },
  genre: { type: String, required: true },
  rating: { type: Number, required: true },
});

export default mongoose.model("Movie", movieSchema);
