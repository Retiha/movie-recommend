import express from "express";
import { getFavorites, addFavorite, removeFavorite } from "../controllers/favoritesController.js";
import auth from "../middleware/auth.js";

const router = express.Router();
router.get("/", auth, getFavorites);
router.post("/", auth, addFavorite);
router.delete("/:movieId", auth, removeFavorite);

export default router;
