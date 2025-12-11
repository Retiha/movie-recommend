import React from "react";
import MovieCard from "./MovieCard";

function Favorites({ favorites, setFavorites }) {
  const removeFavorite = (movie) => {
    setFavorites(favorites.filter(fav => fav.title !== movie.title));
  };

  return (
    <div style={{ textAlign: "center", color: "white", padding: "20px" }}>
      <h2>⭐ Favorite Movies</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {favorites.map(movie => (
            <div key={movie.title} style={{ margin: "10px", border: "1px solid white", padding: "10px", width: "180px" }}>
              <img src={movie.poster} alt={movie.title} style={{ width: "150px" }} />
              <h3>{movie.title}</h3>
              <p>{movie.genre} | ⭐ {movie.rating}</p>
              <button
                onClick={() => removeFavorite(movie)}
                className="favorite-btn"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
