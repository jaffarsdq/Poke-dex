import React from 'react'

//css import

import './navbar.css'

function Navbar() {
  return (
    <nav className='nav-wrapper'>
        <div className="nav-link">
            Poke Dex
        </div>
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