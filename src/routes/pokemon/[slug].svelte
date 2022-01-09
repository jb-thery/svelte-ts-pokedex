<script lang="ts">
  import type { Pokemon } from '../../types';
  import { onMount } from 'svelte';
  import { getPokemon } from '../../api/pokeApi';
  import { page } from '$app/stores';
  import Loader from '../../components/loaders/Loader.svelte';
  import { capitalizeWord } from '../../helpers/globals';
  import BackButton from '../../components/inputs/BackButton.svelte';

  let pokemon: Pokemon;
  let loading = true;
  let imageLoading1 = true;
  let imageLoading2 = true;
  let imageLoading3 = true;
  let imageLoading4 = true;

  onMount(() => {
    fetchPokemon();
  });

  async function fetchPokemon() {
    try {
      loading = true;

      pokemon = await getPokemon($page.params.slug);
    } catch (error) {
      console.error(error);
    } finally {
      loading = false;
    }
  }

  function imageIsLoading(nbImages: number): void {
    switch (nbImages) {
      case 1:
        imageLoading1 = false;
        break;
      case 2:
        imageLoading2 = false;
        break;
      case 3:
        imageLoading3 = false;
        break;
      case 4:
        imageLoading4 = false;
        break;
      default:
        break;
    }
  }

  function imagesStyles(imageLoading): string {
    return `opacity: ${imageLoading ? 0 : 1}; position: ${
      imageLoading ? 'absolute' : 'relative'
    };`;
  }
</script>

<svelte:head>
  <title>JB-THERY | Pokemon</title>

  <meta
    name="description"
    content="Simple svelte typescript pokedex for testing the framework svelete"
  />
</svelte:head>

{#if !loading}
  <header class="flex">
    <BackButton />

    <h1>{capitalizeWord(pokemon.name)}</h1>
  </header>

  <article class="app-grid">
    <section class="types flex">
      <p>Pokémon</p>
      {#each pokemon.types as type, i}
        <p>
          &nbsp;{capitalizeWord(type.type.name)}{i < pokemon.types.length - 1
            ? ','
            : ''}
        </p>
      {/each}
    </section>

    <section>
      <header>
        <h2>Sprites</h2>
      </header>

      <div class="pokemon-images">
        <div>
          <img
            style={imagesStyles(imageLoading1)}
            on:load={() => imageIsLoading(1)}
            src={pokemon.sprites.front_default}
            alt="Front default"
          />

          {#if imageLoading1}
            <div class="loader-slug">
              <Loader />
            </div>
          {/if}

          <i>Front Default</i>
        </div>

        <div>
          <img
            style={imagesStyles(imageLoading2)}
            on:load={() => imageIsLoading(2)}
            src={pokemon.sprites.back_default}
            alt="Back default"
          />

          {#if imageLoading2}
            <div class="loader-slug">
              <Loader />
            </div>
          {/if}

          <i>Back Default</i>
        </div>

        <div>
          <img
            style={imagesStyles(imageLoading3)}
            on:load={() => imageIsLoading(3)}
            src={pokemon.sprites.front_shiny}
            alt="Front shiny"
          />

          {#if imageLoading3}
            <div class="loader-slug">
              <Loader />
            </div>
          {/if}

          <i>Front Shiny</i>
        </div>

        <div>
          <img
            style={imagesStyles(imageLoading4)}
            on:load={() => imageIsLoading(4)}
            src={pokemon.sprites.back_shiny}
            alt="Back shiny"
          />

          {#if imageLoading4}
            <div class="loader-slug">
              <Loader />
            </div>
          {/if}

          <i>Back Default</i>
        </div>
      </div>
    </section>

    <section>
      <header>
        <h2>Moves</h2>
      </header>

      <div class="moves">
        <ul>
          {#each pokemon.moves as move}
            <li>{move.move.name}</li>
          {/each}
        </ul>
      </div>
    </section>
  </article>
{:else}
  <div class="loader-slug main-loader">
    <Loader />
  </div>
{/if}

<style lang="scss">
  h1 {
    font-size: $xl;
    color: $red;
    margin-left: 20px;
  }

  h2 {
    font-size: $m;
    margin-top: 30px;
    color: $red;
  }

  .main-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 200px);
  }

  .types {
    p {
      font-family: $heading-font;
      font-size: 1.5rem;
    }
  }

  .pokemon-images {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media (min-width: 640px) {
      justify-content: space-between;
      flex-wrap: nowrap;
    }

    div {
      text-align: center;

      i {
        display: block;
        font-style: normal;
        font-family: $heading-font;
        color: $grey;
        font-size: $m-mobile;
      }

      width: 50%;

      @media (min-width: 640px) {
        width: 100%;
      }
    }
  }

  .loader-slug {
    filter: invert(1);
    opacity: 0.3;
  }

  .moves {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    ul {
      width: 100%;
      display: grid;
      gap: 5px 40px;
      padding-left: 22px;
      grid-template-columns: repeat(2, 1fr);

      @media (min-width: 640px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
</style>
