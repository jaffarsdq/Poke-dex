import React from 'react'
import { useParams } from 'react-router'
import usePokemonsDetails from '../../hooks/usePokemonsDetails';
import PokeDetail from '../../components/pokeDetail/PokeDetail';

function PokeDetails() {

  const {name} = useParams();

  const [pokemon] = usePokemonsDetails(name);

  return (
    <div className='pokeDetails-wrapper'>
        <PokeDetail {...pokemon}/>
    </div>
  )
}

export default PokeDetails