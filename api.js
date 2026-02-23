function recupListePokemon() {
  return fetch("./data/pokemon.json").then((response) => {
    return response.json();
  });
}

export { recupListePokemon };
