import { useState, useEffect  } from 'react'
import './App.css'
import MovieList from './MovieList'
import SearchForm from './SearchForm'


const url='https://api.themoviedb.org/3/authentication'

const apiKey = import.meta.env.VITE_APP_API_KEY;



const App = () => {
  const [movies, setMovies]=useState([]);
  const handleMovieChange=(submittedSearch)=>{
    setMovies(submittedSearch)
  }

  
const fetchData = async () => {
  try {
    const apiKey = import.meta.env.VITE_API_KEY;
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${apiKey}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    console.log(data)
    setMovies(data);
  } catch (error) {
    console.error(error);
  }
};


useEffect(() => {
    fetchData();
}, []);


  const [searchQuery, setSearchQuery]=useState("")
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          🎥Flixer🎬
        </h1>
    <SearchForm onMovieChange={(handleMovieChange)}/>

      </header>
    <MovieList data={movies}/>
    </div>
  )
}

export default App
