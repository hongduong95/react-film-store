import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//96cfc0e6
const API_URL = "http://www.omdbapi.com/?apikey=96cfc0e6&"

const movie1 = {
  "Title": "Spider-Man Title Reveal",
  "Year": "2021",
  "imdbID": "tt14122734",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNjRjMmQ2NDQtNmI5NC00N2EwLTkwYWQtOTM2OGZjMmI5YmRjXkEyXkFqcGdeQXVyMTI0NTA1MDI3._V1_SX300.jpg"
}

const  App = () => {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s={title}`)
    const data = await response.json()

    setMovies(data.Search)
  }

  useEffect (() => {
    searchMovies("SpiderMan")
  }, [])
  return (
    <div className="App">
      <h1>Movie Land</h1>
      <div className="search">
        <input 
          placeholder='Search for Moive'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <img 
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)} 
        />
      </div>

      {movies?.length > 0
        ? (<div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
          ) : 
        (
          <div className="empty">
            <h2>No Movie Found</h2>
          </div>
        )}

      
    </div>
  );
}

export default App;
