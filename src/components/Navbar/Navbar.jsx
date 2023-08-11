import React from 'react'
import { Link } from 'react-router-dom';

//css import
import './navbar.css'
//assets import
import pokemonLogo from '../../assets/pokemonLogo.png'

function Navbar() {
  return (
    <nav className='nav-wrapper'>
        <Link to={'./'} className="nav-link">
            <img src={pokemonLogo} alt="pokemon logo" className='nav-logo'/>
        </Link>
        <div className="nav-input-wrapper">
            <input 
                className='nav-input'
                type="search" 
                name="search" 
                id="search" 
                placeholder='search your poke...'
            />
            <btn className="nav-input-btn">
              Search
            </btn>
        </div>
    </nav>
  )
}

export default Navbar;