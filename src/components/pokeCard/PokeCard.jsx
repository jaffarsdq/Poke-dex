import React from 'react'
import { useNavigate } from 'react-router-dom'; 


//css import
import './pokeCard.css'
//custom hook
import usePokemonsDetails from '../../hooks/usePokemonsDetails'

function PokeCard({name}) {
    const [pokemon] = usePokemonsDetails(name);
    const navigator = useNavigate();
    function handleClick() {
        navigator(`/details/${name}`)
    }

  return (
    <div onClick={() => handleClick()} className='pokeCard-wrapper'>
        <img className='pokeCard-img' src={pokemon.image} alt="Pokemon"/>
        <div className='pokeCard-link'>{name}</div>
    </div>
  )
}

export default PokeCard