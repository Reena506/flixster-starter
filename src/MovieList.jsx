import React from "react";
import ReactDOM from "react-dom";
import MovieCard from "./MovieCard"
import data from "./data/data"

const MovieList = () =>{
     console.log(data);
  return (
    <div className="movieslist">
        {data.results.map((movie=>
                <MovieCard movie={movie}/>)
            )}
    </div>
  );
}

export default MovieList;