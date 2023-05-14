<script>
  import { fade } from "svelte/transition";
  /**
   * @type {{ name: string; id: number; image: any;}}
   */
  export let pokemon;
</script>

<a
  href={`/pokemon/${pokemon.id}`}
  class="p-2 bg-gray-200 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
  transition:fade
>
  <img src={pokemon.image} alt={pokemon.name} class="h-32 w-32" />
  <p class="capitalize">{pokemon.id}. {pokemon.name}</p>
</a>
