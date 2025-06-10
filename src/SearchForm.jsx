
import ReactDOM from "react-dom";
import React from 'react'


function SearchForm({onMovieChange}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const submittedSearch = event.target.elements.searchInput.value;
    onMovieChange(submittedSearch);}
  

  return (
    
    <form onSubmit={handleSubmit}>
      <input className="search-input" type="text" name="searchInput" placeholder="Enter movie name" />
      <button  className="search-button" type="submit">Search</button>
       <button className="now-playing" >Now Playing</button>
    </form>
  )
}

export default SearchForm