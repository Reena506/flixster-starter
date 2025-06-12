import ReactDOM from "react-dom";
import React from "react";
import { useState } from "react";

function SearchForm({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(input);
  };

  const handleClear = () => {
    onSearch("")
    setInput("");
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        className="search-input"
        type="text"
        name="searchInput"
        placeholder="Enter movie name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="search-button" type="submit">
        Search
      </button>
      <button type="button" className="now-playing" onClick={handleClear}>
        Clear
      </button>
    </form>
  );
}

export default SearchForm;
