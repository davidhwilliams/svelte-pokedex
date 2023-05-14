/**
 * @param {any} page
 */
export async function load({ fetch, params: { id } }) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const pokemonData = await response.json();
  return { props: { pokemonData } };
}
