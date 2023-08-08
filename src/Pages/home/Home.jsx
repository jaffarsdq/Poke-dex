import React, { useEffect, useState } from 'react'
//component import
import PokeCard from '../../components/pokeCard/PokeCard'
//axios import
import axios from 'axios'
//css import 
import './home.css'

function Home() {

        const [pokemons, setPokemons] = useState([])
        useEffect(() => {
            // We will download the content from dummyapi.io
            axios.get("https://pokeapi.co/api/v2/pokemon/")
            .then(response => {
                const responseObject = response.data;
                // console.log(responseObject)
                setPokemons([...responseObject.results]);
            })
        }, []);
  

  return (
    <div className="home-wrapper">
        {pokemons.length > 0 && pokemons.map((pokemon, idx) => <PokeCard
                                        key={idx}
                                        id={idx}
                                        {...pokemon}
                                    />
        )}
    </div>
  )
}

export default Home