import React, { useEffect, useState } from 'react'

import { usePageState } from '../../context/PageStateContext';
//component import
import PokeCard from '../../components/pokeCard/PokeCard'

// //axios
// import axios from 'axios'

//css import 
import './home.css'
import usePokemons from '../../hooks/usePokemons'



function Home() {
    const { apiVal, setApiVal } = usePageState(); 

    const [pokemons] = usePokemons(apiVal);

    useEffect(() => {
      // Persist the page state to local storage
      localStorage.setItem('apiVal', apiVal);
    }, [apiVal]);

    const handleClickNext = () => {
      setApiVal(prevApiVal => prevApiVal + 20);
    }
    const handleClickPrev = () => {
      if(apiVal >= 20){
        setApiVal(prevApiVal => prevApiVal - 20);
      }
    }
  

  return (
    <>
      <div className='home-wrapper'>
          {pokemons.length > 0 && pokemons.map((pokemon, idx) => <PokeCard
                                          key={idx}
                                          {...pokemon}
                                      />
          )}
      </div>
      <div className='home-btn-wrapper'>
        <button 
          onClick={handleClickPrev} 
          className={`home-btn ${apiVal < 20 ? 'not-allowed' : ''}`}
          disabled={apiVal < 20}
        >
          Prev 
        </button> 
        <button onClick={handleClickNext} className='home-btn'>
          Next
        </button>
      </div>
    </>
  )
}

export default Home