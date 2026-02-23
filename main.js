import * as api from "./api.js";

const pokemon = "flareon";

// console.log(utils.recupImgPokemon(pokemon));
const pokemonData = await api.recupListePokemon();
console.log(pokemonData);

console.log(api.choixMemo(pokemonData));
