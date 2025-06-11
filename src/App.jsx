import { useState, useEffect  } from 'react'
import './App.css'
import MovieList from './MovieList'
import SearchForm from './SearchForm'


const url='https://api.themoviedb.org/3/authentication'

const apiKey = import.meta.env.VITE_APP_API_KEY;



const App = () => {
  const [movies, setMovies]=useState([]);
  const [searchQuery, setSearchQuery]=useState([])
  const [mode, setMode]=useState('Now Playing')
  const handleSearch=(submittedSearch)=>{
    setSearchQuery(submittedSearch)
    if(submittedSearch===""){
    setMode("Now Playing")
    fetchData()}
    else{
    setMode("search")
    fetchSearchData(submittedSearch)}
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
    setMovies(data.results);
  } catch (error) {
    console.error(error);
  }
};


useEffect(() => {
    fetchData();
}, []);


const fetchSearchData = async (query) => {
if(!query) return fetchData()
  try {
    const apiKey = import.meta.env.VITE_API_KEY;
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1&api_key=${apiKey} `)
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    console.log(data)
    setMovies(data.results);
  } catch (error) {
    console.error(error);
  }
};

;



  return (
    <div className="App">
      <header className="App-header">
        <h1>
          🎥Flixer🎬
        </h1>
    <SearchForm onSearch={handleSearch}/>

      </header>
    <MovieList data={movies}/>
    </div>
  )
}

export default App
