import React, { useState } from "react";
import ReactDOM from "react-dom";
import MovieCard from "./MovieCard";

// import data from "./data/data"

const MovieList = ({ data, onCardClick, favorites, onToggleFavorite, watched, onToggleWatched }) => {
  const [visibleCount, setVisibleCount] = useState(10);
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  if (!data || !Array.isArray(data)) {
    // console.log(props.data)
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="movieslist">
        {data.slice(0, visibleCount).map((movie) => (
          <MovieCard movie={movie}  onClick={() => onCardClick(movie)} isFavorite={favorites.has(movie.id)} onToggleFavorite={onToggleFavorite} isWatched={watched.has(movie.id)} onToggleWatched={onToggleWatched} /> ))}
      </div>
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};

export default MovieList;
