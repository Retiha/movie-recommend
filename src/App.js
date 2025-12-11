import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar"; // ✅ Add Navbar
import MovieList from "./components/MovieList";
import Favorites from "./components/Favorites";


function App() {
  const [page, setPage] = useState("home"); // Track which page to show
  const [movies, setMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then(res => res.json())
      .then(data => {
        setMovies(data);
        setDisplayedMovies(data);
      });
  }, []);

  const filterByGenre = (genre) => {
    if (genre === "All" || genre === "") {
      setDisplayedMovies(movies);
    } else {
      setDisplayedMovies(movies.filter(movie => movie.genre === genre));
    }
  };

  const searchMovies = (query) => {
    setDisplayedMovies(
      movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()))
    );
  };

  return (
    <div style={{ background: "black", minHeight: "100vh", paddingTop: "20px" }}>
    <Navbar setPage={setPage} favoritesCount={favorites.length} />
      {page === "home" && (
        <MovieList
          movies={displayedMovies}
          searchMovies={searchMovies}
          filterByGenre={filterByGenre}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      )}

      {page === "favorites" && (
        <Favorites
          favorites={favorites}
          setFavorites={setFavorites}
        />
      )}
    </div>
  );
}

export default App;
