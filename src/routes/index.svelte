<script lang="ts">
  import SearchInput from '../components/inputs/SearchInput.svelte';
  import { onMount } from 'svelte';
  import { getPokemon, getPokemons } from '../api/pokeApi';
  import PokemonList from '../components/pagination/PokemonList.svelte';
  import SkeletonLoaderCard from '../components/cards/SkeletonLoaderCard.svelte';
  import { pokemons } from '../stores/global';

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
  {#if !loading}
    <PokemonList />
  {:else}
    <SkeletonLoaderCard />
  {/if}
</section>

<style lang="scss">
  h1 {
    color: $red;
  }
</style>
