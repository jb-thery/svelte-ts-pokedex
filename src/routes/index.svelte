<script lang="ts">
  import SearchInput from '../components/inputs/SearchInput.svelte';
  import { onMount } from 'svelte';
  import { getPokemon, getPokemons } from '../api/pokeApi';
  import SkeletonLoaderCard from '../components/cards/SkeletonLoaderCard.svelte';
  import { allPokemons, paginatedPokemons, pokemons } from '../stores/global';
  import PokeCard from '../components/cards/PokeCard.svelte';
  import Pagination from '../components/pagination/Pagination.svelte';
  import TheFooter from '../components/core/TheFooter.svelte';

  let loading = true;

  onMount(() => {
    getPokemonList();
  });

  async function getPokemonList(): Promise<void> {
    try {
      loading = true;

      const { results } = await getPokemons();

      const pokemonpPromise = results.map((pokemon) =>
        getPokemon(pokemon.name)
      );

      const allPokemonData = await Promise.all(pokemonpPromise);
      allPokemons.set(allPokemonData);
      pokemons.set(allPokemonData);
    } catch (error) {
      console.error(error);
    } finally {
      loading = false;
    }
  }
</script>

<svelte:head>
  <title>JB-THERY | Svelte Typescript Pokedex</title>

  <meta
    name="description"
    content="Simple svelte typescript pokedex for testing the Svelete framework"
  />
</svelte:head>

<article class="app-grid">
  <header>
    <h1>Svelte Ts Pokédex</h1>
  </header>

  <section class="app-grid">
    <SearchInput />
  </section>

  <section class="app-grid">
    {#if !loading}
      {#each $paginatedPokemons as pokemon}
        <PokeCard
          pokemonName={pokemon.name}
          pokemonImage={pokemon.sprites.front_default}
          pokemonTypes={pokemon.types}
          pokemonPokemonId={pokemon.order}
        />
      {/each}

      {#if $paginatedPokemons.length === 0}
        <i class="no-results">No pokemon found 😢</i>
      {/if}

      <nav>
        <Pagination />
      </nav>
    {:else}
      <SkeletonLoaderCard />
    {/if}
  </section>
</article>

<TheFooter />

<style lang="scss">
  h1 {
    color: $red;
  }

  .no-results {
    font-family: $heading-font;
    font-style: normal;
    font-size: $m;
    color: $grey-medium;
    margin: 100px auto;
  }
</style>
