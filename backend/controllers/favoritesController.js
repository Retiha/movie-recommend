import User from "../models/User.js";

export const getFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user.favorites);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

export const addFavorite = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const { movieId, title, poster } = req.body;

    // Prevent duplicates
    if (!user.favorites.find(f => f.movieId === movieId)) {
      user.favorites.push({ movieId, title, poster });
      await user.save();
    }

    res.json(user.favorites);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

export const removeFavorite = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.favorites = user.favorites.filter(f => f.movieId !== req.params.movieId);
    await user.save();
    res.json(user.favorites);
  } catch (err) {
    res.status(500).send("Server error");
  }
};
