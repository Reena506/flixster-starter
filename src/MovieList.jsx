import React, { useState } from "react";
import ReactDOM from "react-dom";
import MovieCard from "./MovieCard";

// import data from "./data/data"

const MovieList = ({
  data,
  onCardClick,
  favorites,
  onToggleFavorite,
  watched,
  onToggleWatched,
  onLoadMore,
}) => {
  if (!data || !Array.isArray(data)) {
    // console.log(props.data)
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="movieslist">
        {data.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => onCardClick(movie)}
            isFavorite={favorites.has(movie.id)}
            onToggleFavorite={onToggleFavorite}
            isWatched={watched.has(movie.id)}
            onToggleWatched={onToggleWatched}
          />
        ))}
      </div>
      <button onClick={onLoadMore}>Load More</button>
    </div>
  );
};

export default MovieList;
