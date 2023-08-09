import React from 'react'
import { Link } from 'react-router-dom';
//css import

import './navbar.css'

function Navbar() {
  return (
    <nav className='nav-wrapper'>
        <Link to={'/'} className="nav-link">
            Poke Dex
        </Link>
        <div className="nav-input-wrapper">
            <input 
                className='nav-input'
                type="search" 
                name="search" 
                id="search" 
                placeholder='search your poke...'
            />
        </div>
    </nav>
  )
}

export default Navbar