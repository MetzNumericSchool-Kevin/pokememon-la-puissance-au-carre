function recupListePokemon() {
  return fetch("./data/pokemon.json").then((response) => {
    return response.json();
  });
}

function choixMemo(listePoke) {
  const selection = [...listePoke].sort(() => Math.random() - 0.5).slice(0, 6);

  let choixMelange = [...selection, ...selection];

  choixMelange = choixMelange.sort(() => Math.random() - 0.5);

  return choixMelange;
}

export { recupListePokemon, choixMemo };
