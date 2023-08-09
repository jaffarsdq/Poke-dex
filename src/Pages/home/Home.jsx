import React from 'react'
//component import
import PokeCard from '../../components/pokeCard/PokeCard'
//axios import
import axios from 'axios'
//css import 
import './home.css'
import usePokemons from '../../hooks/usePokemons'

function Home() {

    const [pokemons] = usePokemons();

  return (
    <div className="home-wrapper">
        {pokemons.length > 0 && pokemons.map((pokemon, idx) => <PokeCard
                                        key={idx}
                                        {...pokemon}
                                    />
        )}
    </div>
  )
}

export default Home