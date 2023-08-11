import axios from 'axios'
import { pokemonsName } from '../apis/pokeApis';
import { useEffect, useState } from 'react';

function usePokemonsDetails(name) {
    const [pokemon, setPokemon] = useState('');
    async function downloadPokemon(name) {
        try {
            const response = await axios.get(pokemonsName(name));
            setPokemon({
                name: response.data.name,
                image: response.data.sprites.other.dream_world.front_default,
                weight: response.data.weight,
                height: response.data.height,
                types: response.data.types.map((t) => t.type.name),
            });
        } catch {
            setPokemon({
                name: 'Not found :(',
                image: '',
                weight: '0',
                height: '0',
                types: ['Not found']
            });
        }
    }

    useEffect(() => {
        downloadPokemon(name);
    },[name])

    return [pokemon];
}

export default usePokemonsDetails;