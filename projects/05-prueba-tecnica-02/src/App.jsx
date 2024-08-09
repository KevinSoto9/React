import {result} from "./mocks/result.js"
import { noResult } from "./mocks/no-result.js"
import './App.css'

function App() {
  const movies = result.Search
  const hasMovies = movies.length > 0
  return (
   <div className='page'>

    <header>
      <h1>Movie Searcher</h1>
      <form className='form'>
        <input placeholder='Star Wars, Marvel, Alien..'></input>
        <button type='submit'>Search</button>  
      </form>
    </header>

    <main>
      {
          hasMovies
          ? (
            <ul>
              {
                movies.map(movie =>(
                  <li key={movie.imdbID}>
                      <h3>{movie.Title}</h3>
                      <p>{movie.Year}</p>
                      <img src= {movie.Poster}alt="" />
                  </li>
                ))
              }
            </ul>
             )
             :(
              <p></p>
             )
      }
    </main>

   </div>
   
  )
}

export default App
