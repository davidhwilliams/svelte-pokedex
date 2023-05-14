/**
 * @param {any} page
 */
export async function load({ fetch }) {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;
  const response = await fetch(url);
  const pokemonData = await response.json();
  const loadedPokemon = pokemonData.results.map(
    (/** @type {any} */ data, /** @type {number} */ index) => {
      return {
        name: data.name,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`,
      };
    }
  );
  return { props: { pokemon: loadedPokemon } };
}
