import React, { useState } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

function MovieList({ movies, favorites, setFavorites }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("");

  // Unique genres for dropdown
  const genres = [...new Set(movies.map(movie => movie.genre))];

  // Filter logic
  const filteredMovies = movies
    .filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(movie =>
      genre ? movie.genre.toLowerCase() === genre.toLowerCase() : true
    );

  return (
    <div style={{ textAlign: "center", color: "white", padding: "20px" }}>
      <h2>🎬 Recommended Movies</h2>

      {/* Search + Filter Controls */}
      <div style={{ margin: "15px 0" }}>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "8px 12px",
            borderRadius: "8px",
            border: "none",
            marginRight: "10px",
            width: "200px"
          }}
        />

        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          style={{
            padding: "8px 12px",
            borderRadius: "8px",
            border: "none",
            width: "150px"
          }}
        >
          <option value="">All Genres</option>
          {genres.map(g => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
      </div>

      {/* Movie List */}
      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.title}
            movie={movie}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
