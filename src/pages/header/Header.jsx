import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header>
      <div className="container">
        <div className="content">
          <div className="inn">
            <Link to="/">Movies</Link>
          </div>
          <ul className="links">
              <li>
                <Link to="/">Watch List</Link>
              </li>
              <li>
                <Link to="/watched">Watched</Link>
              </li>
              <li>
                <Link to="/add" className='btn'>Add</Link>
              </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header