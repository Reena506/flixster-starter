import React, { useState } from "react";
import ReactDOM from "react-dom";
import MovieCard from "./MovieCard"
// import data from "./data/data"

const MovieList = ({data}) =>{



    const [visibleCount, setVisibleCount]=useState(10);
    const handleLoadMore=()=>{
        setVisibleCount(prev=>prev+10)
    }

if (!data || !Array.isArray(data)) {
  // console.log(props.data)
    return <p>Loading...</p>; // or return nothing or a spinner
  }

  return (
    <div>
    <div className="movieslist">
        {data.slice(0, visibleCount).map((movie=>
                <MovieCard movie={movie}/>)
            )}
       
    </div>
     <button onClick={handleLoadMore}>Load More</button>
      
    </div>
    
  );
}

export default MovieList;



