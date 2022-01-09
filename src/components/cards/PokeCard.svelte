<script lang="ts">
  import { goto } from '$app/navigation';
  import { onDestroy, onMount } from 'svelte';
  import { capitalizeWord, listToString } from '../../helpers/globals.ts';
  import { currentPage, pokemons } from '../../stores/global';
  import Loader from '../loaders/Loader.svelte';
  import { base } from '$app/paths';

  export let pokemonName = null;
  export let pokemonImage = null;
  export let pokemonTypes = null;
  export let pokemonPokemonId = null;

  let interval = null;
  let flipImage = 1;
  let imageLoading = true;

  onMount(() => {
    animePokemonImage();
  });

  onDestroy(() => {
    clearInterval(interval);
  });

  currentPage.subscribe(() => {
    imageLoading = true;
  });

  pokemons.subscribe(() => {
    imageLoading = true;
  });

  function animePokemonImage() {
    let count = 0;

    interval = setInterval(() => {
      if (count % 2 === 0) {
        flipImage = 1;
      } else {
        flipImage = -1;
      }
      count++;
    }, 1000);
  }

  function handleNavigation(): void {
    goto(`${base}/pokemon/${pokemonName}`);
  }

  function displayIndex(id: string | number): string | number {
    if (id <= 9) return `000${id}`;
    else if (id >= 10 && id <= 99) return `00${id}`;
    else if (id >= 100 && id <= 999) return `0${id}`;
    return id;
  }

  function getCardColor(pokemonTypes): string {
    const typesName = pokemonTypes.map((type) => type.type.name).shift();

    const genColor = (background, text) =>
      `background-color: ${background}; color: ${text}`;

    const colorsDict = {
      grass: genColor('#b3e1b2', '#f1fff6'),
      bug: genColor('#b3e1b2', '#f1fff6'),
      fire: genColor('#fcd2b1', '#fff4f0'),
      electric: genColor('#f8df93', '#fffef4'),
      water: genColor('#b5e8ef', '#f4feff'),
      psychic: genColor('#b4a2ff', '#f7f4ff'),
      poison: genColor('#b4a2ff', '#f7f4ff'),
      ground: genColor('#dcab88', '#fdf5ee')
    };

    return colorsDict[typesName] || genColor('#dadada', '#f6f6f6');
  }

  function imageIsLoading(): void {
    imageLoading = false;
  }

  function imagesStyles(imageLoading, flipImage): string {
    return `opacity: ${imageLoading ? 0 : 1}; position: ${
      imageLoading ? 'absolute' : 'relative'
    }; transform: scaleX(${flipImage})`;
  }
</script>

<article
  class="centered-y-flex scale-on-hover"
  on:click={handleNavigation}
  style={getCardColor(pokemonTypes)}
>
  <img
    style={imagesStyles(imageLoading, flipImage)}
    class="pokemon-image"
    src={pokemonImage}
    alt={pokemonName}
    on:load={imageIsLoading}
  />
  {#if imageLoading}
    <Loader />
  {/if}

  <div class="infos">
    <h2>{capitalizeWord(pokemonName)}</h2>

    <h3 class="types">
      {listToString(pokemonTypes.map((type) => capitalizeWord(type.type.name)))}
    </h3>
  </div>

  <i class="list-index"><span>#</span>{displayIndex(pokemonPokemonId)}</i>
</article>

<style lang="scss">
  article {
    position: relative;
    border-radius: 30px;
    padding: 10px 20px;
    cursor: pointer;

    .pokemon-image {
      width: 90px;
      height: 90px;
    }

    .infos {
      padding-left: 10px;

      h2 {
        color: $white;
        font-size: $l-mobile;

        @media (min-width: 640px) {
          font-size: $l;
        }
      }

      img {
        margin-top: 5px;
        margin-right: 10px;
      }
    }

    i {
      font-family: $heading-font;
      position: absolute;
      bottom: 0;
      right: 20px;
      font-size: $l;
      font-style: normal;
      letter-spacing: -2px;

      span {
        font-size: $m;
      }
    }
  }
</style>
