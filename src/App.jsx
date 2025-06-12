import { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./MovieList";
import SearchForm from "./SearchForm";
import Modal from "./Modal";

const apiKey = import.meta.env.VITE_API_KEY;

const App = () => {
  const [sort, setSort] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [mode, setMode] = useState("Now Playing");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favorites, setFavorites] = useState(new Set());
  const [watched, setWatched] = useState(new Set());
  const [page, setPage] = useState("home"); 

  const handleSearch = (submittedSearch) => {
    setSearchQuery(submittedSearch);
    if (submittedSearch === "") {
      setMode("Now Playing");
      fetchData();
    } else {
      setMode("search");
      fetchSearchData(submittedSearch);
    }
  };

  const toggleFavorite = (movieId) => {
    setFavorites((prev) => {
      const newSet = new Set(prev);
      newSet.has(movieId) ? newSet.delete(movieId) : newSet.add(movieId);
      return newSet;
    });
  };

  const toggleWatched = (movieId) => {
    setWatched((prev) => {
      const newSet = new Set(prev);
      newSet.has(movieId) ? newSet.delete(movieId) : newSet.add(movieId);
      return newSet;
    });
  };

  const handleSort = (type) => {
    setSort(type);
    const sorted = [...movies];
    if (type === "title") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (type === "date") {
      sorted.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    } else if (type === "rating") {
      sorted.sort((a, b) => b.vote_average - a.vote_average);
    }
    setMovies(sorted);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${apiKey}`
      );
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchSearchData = async (query) => {
    if (!query) return fetchData();
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`
      );
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCardClick = async (movie) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}&language=en-US`
      );
      if (!response.ok) throw new Error("Failed to fetch movie details");
      const fullMovie = await response.json();
      setSelectedMovie(fullMovie);
    } catch (error) {
      console.error(error);
    }
  };

  const getDisplayedMovies = () => {
    if (page === "favorites") {
      return movies.filter((movie) => favorites.has(movie.id));
    } else if (page === "watched") {
      return movies.filter((movie) => watched.has(movie.id));
    }
    return movies;
  };

  return (
    <div className="App">
      <aside className="sidebar">
        <nav>
          <ul>
            <button onClick={() => setPage("home")}>Home</button>
            <button onClick={() => setPage("favorites")}>Favorites</button>
            <button onClick={() => setPage("watched")}>Watched</button>
          </ul>
        </nav>
      </aside>

      <div className="main-content">
        {page === "home" && (
          <header className="App-header">
            <h1>🎥Flixer🎬</h1>
            <SearchForm onSearch={handleSearch} />
            <select onChange={(e) => handleSort(e.target.value)}>
              <option value="">Sort By</option>
              <option value="title">Title (A–Z)</option>
              <option value="date">Release Date (Newest)</option>
              <option value="rating">Vote Average (Highest)</option>
            </select>
          </header>
        )}

        <main>
          <MovieList
            data={getDisplayedMovies()}
            onCardClick={handleCardClick}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            watched={watched}
            onToggleWatched={toggleWatched}
          />

          {selectedMovie && (
            <Modal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
          )}
        </main>

        <footer className="footer">
          <p className="copyright">@ 2025 Reena</p>
        </footer>
      </div>
    </div>
  );
};

export default App;


