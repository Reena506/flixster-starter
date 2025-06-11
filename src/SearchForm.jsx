
import ReactDOM from "react-dom";
import React from 'react'


function SearchForm({onSearch}) {
  const handleSearch = (event) => {
    event.preventDefault();
    const submittedSearch = event.target.elements.searchInput.value;
    onSearch(submittedSearch);}
  

  return (
    
    <form onSubmit={handleSearch}>
      <input className="search-input" type="text" name="searchInput" placeholder="Enter movie name" />
      <button  className="search-button" type="submit">Search</button>
       <button type="button" className="now-playing" onClick={()=>onSearch("")}>Now Playing</button>
    </form>
  )
}

export default SearchForm