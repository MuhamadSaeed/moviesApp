import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import Card from '../card/Card'
function WatchList() {
  const { watchlist } = useContext(GlobalContext)

  return (
    <div className="movie-page">
    <div className="container">
      <div className="header">
      <h1 className='heading'>My Watchlist</h1>
    <span className='count-pill'>
      {watchlist.length} {watchlist.length === 1 ? 'Movie':
    'Movies' }</span>
  </div>
      {watchlist.length > 0 ? 
      (<div className="movie-grid">
         {watchlist.map((movie)=>(
            <Card key={movie.imdbID} movie={movie} type='watchlist'/>
          ))}
     </div>):(<h2  className='no-movies'>No movies in your list, add some!</h2>)
    
    }
    </div>
  </div>
    )
}

export default WatchList