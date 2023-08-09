import { pokemonsUrl } from "../apis/pokeApis";
import { useState, useEffect } from "react";
import axios from "axios";
function usePokemons() {
    const [pokemons, setPokemons] = useState([])
        useEffect(() => {        
            axios.get(pokemonsUrl())
            .then(response => {
                const responseObject = response.data;
                setPokemons([...responseObject.results]);
            })
        }, []);

        return [pokemons];
}

export default usePokemons;