import React from 'react'
import Controls from '../Controls'
function Card({movie, type}) {
  return (
    <div>
            <div className='movie-card'>
        <div className="overlay"></div>
        {
                movie.Poster ? (
                    <img src={movie.Poster} alt={movie.Title}></img>
                ): <div className='filter-poster'></div>
        }
        <Controls movie={movie} type={type}/>
    </div>
    </div>
  )
}

export default Card