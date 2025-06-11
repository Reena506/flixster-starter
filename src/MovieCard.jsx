import React from "react";
import ReactDOM from "react-dom";

const MovieCard = ({ movie, onClick }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
  return (
     <div className="moviecard" onClick={() => {
      console.log("MovieCard clicked:", movie);
      onClick();
    }}>


      <img src={posterUrl} />
      <h3>{movie.original_title}</h3>
      <p>{movie.vote_average}</p>
    </div>
  );
};

export default MovieCard;
