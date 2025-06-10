import React, { useState } from "react";
import ReactDOM from "react-dom";
import MovieCard from "./MovieCard"
// import data from "./data/data"

const MovieList = (props) =>{



    const [visibleCount, setVisibleCount]=useState(10);
    const handleLoadMore=()=>{
        setVisibleCount(prev=>prev+10)
    }

if (!props.data || !Array.isArray(props.data.results)) {
  
    return <p>Loading...</p>; // or return nothing or a spinner
  }

  return (
    <div>
    <div className="movieslist">
        {props.data.results.slice(0, visibleCount).map((movie=>
                <MovieCard movie={movie}/>)
            )}
       
    </div>
     <button onClick={handleLoadMore}>Load More</button>
      
    </div>
    
  );
}

export default MovieList;



