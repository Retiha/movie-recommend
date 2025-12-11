import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favorites: [
    {
      movieId: String,
      title: String,
      poster: String
    }
  ]
});

export default mongoose.model("User", userSchema);
