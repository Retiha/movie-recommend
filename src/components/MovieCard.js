import React from "react";
import "./MovieCard.css"; // Make sure this exists for card styling

function MovieCard({ movie, favorites, setFavorites }) {
  // Check if this movie is already a favorite
  const isFavorite = favorites.some(fav => fav.title === movie.title);

  // Toggle favorite status
  const toggleFavorite = () => {
    if (isFavorite) {
      setFavorites(favorites.filter(fav => fav.title !== movie.title));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <div className="movie-card">
      <img
        src={movie.poster}
        alt={movie.title}
        style={{ width: "150px", borderRadius: "5px" }}
      />
      <h3>{movie.title}</h3>
      <p>{movie.genre} | ⭐ {movie.rating}</p>
      <button className="favorite-btn" onClick={toggleFavorite}>
        {isFavorite ? "Remove Favorite" : "Add Favorite"}
      </button>
    </div>
  );
}

export default MovieCard;
