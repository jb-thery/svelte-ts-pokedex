<script lang="ts">
  import PokeCard from '../components/cards/PokeCard.svelte';
  import SearchInput from '../components/inputs/SearchInput.svelte';
  import Pagination from '../components/pagination/Pagination.svelte';
  import { onMount } from 'svelte';
  import { getPokemons } from '../api/pokeApi';
  import type { Pokemons } from '../types';

  let pokemons: Array<Pokemons> = [];

  onMount(async () => {
    const { results } = await getPokemons();

    pokemons = results;
  });
</script>

<svelte:head>
  <title>JB-THERY | Svelte Typescript Pokedex</title>

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
    <PokeCard pokemonName={pokemon.name} />
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
