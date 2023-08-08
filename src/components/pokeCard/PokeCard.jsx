import React, { useEffect, useState } from 'react'

//css import
import './pokeCard.css'
import axios from 'axios'


function PokeCard({name}) {

    const [pokemon, setPokemon] = useState('');
    async function downloadImage(name) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const pokemonOfSameTypes = await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name : ''}`);
        setPokemon({
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            weight: response.data.weight,
            height: response.data.height,
            types: response.data.types.map((t) => t.type.name),
            similarPokemons: pokemonOfSameTypes.data.pokemon
        });
    }

    useEffect(() => {
        downloadImage(name);
    })


  return (
    <div onClick={() => handleClick} className='pokeCard-wrapper'>
        <img className='pokeCard-img' src={pokemon.image} alt="Pokemon"/>
        <a className='pokeCard-link' href="#">{name}</a>
    </div>
  )
}

export default PokeCard