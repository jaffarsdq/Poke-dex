import { morePokemons } from '../apis/pokeApis';
import { useState, useEffect } from 'react';
import axios from 'axios';
function usePokemons(val) {
    const [pokemons, setPokemons] = useState([])
        useEffect(() => {      
            axios.get(morePokemons(val))
            .then(response => {
                const responseObject = response.data;
                setPokemons([...responseObject.results]);
            })
        }, [val]);

        return [pokemons];
}

export default usePokemons;