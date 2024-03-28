import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    title: {type: String, require: true},
    rating: {type: Number, require: true},
    description: {type: String, require: true},
    imdbLink: {type: String, require: true},
})

export default mongoose.model("Movie", movieSchema)