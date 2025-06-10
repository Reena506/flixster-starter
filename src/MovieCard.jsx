import React from "react";
import ReactDOM from "react-dom";

const MovieCard = ({movie}) =>{
    const posterUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
  return (
    <div className="moviecard">
       <img src={posterUrl}/>
       <h3>{movie.original_title}</h3>
       <p>{movie.vote_average}</p>
   {/* <p>{movie.release_date}</p> */}
    </div>
  );
}

export default MovieCard;