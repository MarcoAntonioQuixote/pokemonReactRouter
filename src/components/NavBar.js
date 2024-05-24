import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>

        <Link to="/home">
            <button>Home</button>
        </Link>
        <Link to="/search">
            <button>Search</button>
        </Link>
        <Link to='/profile/25'>
            <button>Profile</button>
        </Link>
    </div>
  )
}

export default NavBar