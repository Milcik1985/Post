import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String, require: true },
  userName: { type: String, require: true, min: 3 },
  email: { type: String, require: true },
  password: { type: String, require: true },
  movies: { type: Array },
});

const User = mongoose.model("User", userSchema);

export default User;
