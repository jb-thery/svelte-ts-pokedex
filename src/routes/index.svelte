<script lang="ts">
  import PokeCard from '../components/cards/PokeCard.svelte';
  import SearchInput from '../components/inputs/SearchInput.svelte';
  import Pagination from '../components/pagination/Pagination.svelte';
  import { onMount } from 'svelte';
  import { getPokemon, getPokemons } from '../api/pokeApi';
  import type { Pokemon } from '../types';

  let pokemons: Array<Pokemon> = [];

  onMount(async () => {
    const response = await getPokemons();

    const posmisesList = response.results.map((pokemons) =>
      getPokemon(pokemons.name)
    );
    pokemons = await Promise.all(posmisesList);
  });
</script>

<svelte:head>
  <title>Svelte Typescript Pokedex</title>

  <meta
    name="description"
    content="Simple svelte typescript pokedex for testing the framework svelete"
  />
</svelte:head>

<header>
  <h1>Svelte Ts Pokédex</h1>
</header>

<section class="app-grid">
  <SearchInput />
</section>

<section class="app-grid">
  {#each pokemons as pokemon}
    <PokeCard
      pokemonId={pokemon.order}
      name={pokemon.name}
      image={pokemon.sprites.front_default}
      types={pokemon.types}
    />
  {/each}
</section>

<nav>
  <Pagination />
</nav>

<style lang="scss">
  h1 {
    color: $red;
  }
</style>
