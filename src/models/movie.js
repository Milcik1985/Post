import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    id: {type: String, require:true},
    imageUrl: {type: String, require: true},
    title: {type: String, require: true},
    genre: {type: String, require:true},
    rating: {type: Number, require: true},
})

export default mongoose.model("Movie", movieSchema)