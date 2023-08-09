import axios from 'axios'
import { pokemonsName } from '../apis/pokeApis';
import { useEffect, useState } from 'react';

function usePokemonsDetails(name) {
    const [pokemon, setPokemon] = useState('');
    async function downloadPokemon(name) {
        const response = await axios.get(pokemonsName(name));
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
        downloadPokemon(name);
    },[])

    return [pokemon];
}

export default usePokemonsDetails;