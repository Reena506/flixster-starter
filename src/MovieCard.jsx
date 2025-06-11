import React from "react";
import ReactDOM from "react-dom";

const MovieCard = ({ movie, onClick, isFavorite, onToggleFavorite, isWatched, onToggleWatched }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  const handleHeartClick = (e) => {
    e.stopPropagation();
    onToggleFavorite(movie.id);
  };

  const handleWatchClick = (e) => {
    e.stopPropagation();
    onToggleWatched(movie.id);
  };

  return (
    <div
      className="moviecard"
      onClick={() => {
        console.log("MovieCard clicked:", movie);
        onClick();
      }}
    >
      <img src={posterUrl} alt={movie.original_title} />
      <h3>{movie.original_title}</h3>
      <p>{movie.vote_average}</p>
      <button
        onClick={handleHeartClick} >
        {isFavorite ? "❤️" : "🤍"}
      </button>
      <button
        onClick={handleWatchClick} >
        {isWatched ? "🎬" : "❌"}
      </button>

    </div>
  );
};

export default MovieCard;
