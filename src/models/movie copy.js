import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  id: { type: String, require: true },
  full_name: { type: String, require: true, min: 3 },
  email: { type: String, require: true },
  password: { type: String, require: true },
  movies: { type: Array },
});

export default mongoose.model("Movie", userSchema);
