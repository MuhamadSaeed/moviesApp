import React, { useEffect, useState } from 'react'
import MovieCard from '../movieCard/MovieCard';
function Add() {

    const [searchedMovies , setSearchedMovies] = useState([])
    const [value , setValue] = useState("harry potter")
  
    useEffect(() => {
        const fetchData = async () => {
          const url = `http://www.omdbapi.com/?s=${value}&apikey=b08bfdf7`;
      
          try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            if (json.Search){
                setSearchedMovies(json.Search)
            }
          } catch (error) {
            console.error(error.message);
          }
        };
      
        fetchData();
      }, [value]);

  return (
    <div className='add-page'>
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
             type="text"
             placeholder='Search for a movie'
             value={value}
             onChange={(e)=> setValue(e.target.value)}
             />
            {
             searchedMovies.length > 0 && (<ul className='results'>
               {searchedMovies.map((movie)=>
                <li key={movie.imdbID} > <MovieCard movie={movie}/> </li>)}
             </ul>)
            }
          </div>
        </div>
      </div>
    </div>
    )
}

export default Add