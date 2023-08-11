import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//css import
import './navbar.css'
//assets import
import pokemonLogo from '../../assets/pokemonLogo.png'

function Navbar() {

  const [namePoke, setNamePoke] = useState('');
  const navigator = useNavigate();
    function handleClick() {
        navigator(`/details/${namePoke}`)
    }
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
                onChange={(e) => setNamePoke(e.target.value)}
            />
            <button 
              onClick={handleClick}
              className="nav-input-btn">
              Search
            </button>
        </div>
    </nav>
  )
}

export default Navbar;