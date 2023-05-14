<script>
  /**
   * @type {import('./$types').PageData}
   */
  export let data;
  const pokemonData = data.props.pokemonData;
</script>

<h1 class="text-4xl text-center my-8 capitalize text-gray-800">
  <p>{pokemonData.name}</p>
</h1>

<div class="flex flex-col items-center">
  <div class="flex flex-row">
    <img src={pokemonData.sprites["front_default"]} alt="pokemon sprite" />
    <img src={pokemonData.sprites["back_default"]} alt="pokemon sprite" />
  </div>

  <div class="flex flex-col flex-1">
    <p>
      <strong>Type(s) - </strong>{#each pokemonData.types as type, index}
        {type.type.name.charAt(0).toUpperCase()}{type.type.name.slice(
          1
        )}{#if index !== pokemonData.types.length - 1},{/if}
      {/each}
    </p>
    <p><strong>Height - </strong>{pokemonData.height}</p>
    <p><strong>Weight - </strong>{pokemonData.weight}</p>
  </div>
</div>
