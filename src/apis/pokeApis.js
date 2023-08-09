export function pokemonsUrl() {
    return 'https://pokeapi.co/api/v2/pokemon/'
}

export function pokemonsName(name) {
    return `https://pokeapi.co/api/v2/pokemon/${name}`
}

export function morePokemons(val) {
    return `https://pokeapi.co/api/v2/pokemon/?offset=${val}&limit=20`
}