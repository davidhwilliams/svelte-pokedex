<script>
  import PokemonCard from "../components/PokemonCard.svelte";

  export let data;
  const pokemon = data.props.pokemon;

  let searchTerm = "";

  /** @type {any[]}  */
  let filteredPokemon = [];

  $: {
    if (searchTerm) {
      filteredPokemon = pokemon.filter(
        (/** @type {{ name: string; }} */ pokemon) =>
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      filteredPokemon = [...pokemon];
    }
  }
</script>

<svelte:head>
  <title>SvelteKit PokeDex</title>
</svelte:head>

<h1 class="p-4 uppercase text-4xl text-center text-gray-800">
  SvelteKit PokeDex
</h1>

<div class="flex justify-center p-4">
  <input
    type="text"
    placeholder="Search Pokemon..."
    bind:value={searchTerm}
    class="w-3/4 rounded-md text-lg p-4 border-2 border-gray-300 text-gray-800"
  />
</div>

<div class="px-10 grid gap-4 md:grid-cols-3 grid-cols-1">
  {#each filteredPokemon as poke}
    <PokemonCard pokemon={poke} />
  {/each}
</div>

<style>
</style>
