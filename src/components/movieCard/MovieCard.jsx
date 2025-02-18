import React from 'react'

import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
function MovieCard({movie}) {

    const {MoviesDispatch , watchlist , watched} = useContext(GlobalContext)

    const currentMovie = watchlist.find((o)=> o.imdbID === movie.imdbID) 
    const currentMovieWatched = watched.find((o)=> o.imdbID === movie.imdbID)

    const watchlistDisabled = currentMovie ? true : 
          currentMovieWatched ? true : false

    const watchedDisabled = currentMovieWatched ? true : false      

  return (
    <div className='result'>
    <div className='poster-wrapper'>
        {
            movie.Poster ? (
                <img src={movie.Poster} alt={movie.Title} />
            ): <div className='filter-poster'></div>
        }
    </div>
    <div className="info">
        <div className="header">
            <h3 className='title'>{movie.Title}</h3>
            {movie.Year ? <h4 className='release-date'>{movie.Year}</h4> : '-'}
        </div>
    
    <div className="controls">
        <button
         className='btn'
         disabled={watchlistDisabled}
         onClick={()=>MoviesDispatch({type : 'ADD_MOVIE_TO_WATCHLIST' , payload : movie })}
         >Add to Watchlist
        </button>

        <button
         className='btn'
         disabled={watchedDisabled}
         onClick={()=>MoviesDispatch({type : 'ADD_MOVIE_TO_WATCHED' , payload : movie })}
         >Add to Watched
        </button>
    </div>
    </div>
</div>  )
}

export default MovieCard