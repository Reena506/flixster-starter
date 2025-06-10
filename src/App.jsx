import { useState } from 'react'
import './App.css'
import MovieList from './MovieList'




const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          🎥Flixer🎬
        </h1>
    
      </header>
    <MovieList/>
    </div>
  )
}

export default App
