<script lang="ts">
  import { goto } from '$app/navigation';
  import { onDestroy, onMount } from 'svelte';
  import { capitalizeWord, listToString } from '../../helpers/globals.ts';
  import { getPokemon } from '../../api/pokeApi';

  export let pokemonName: string;

  let pokemonImage = null;
  let pokemonTypes = null;
  let pokemonPokemonId = null;

  let loading = true;
  let interval = null;
  let flipImage = 1;

  onMount(() => {
    getPokemonInfos();
    animePokemonImage();
  });

  onDestroy(() => {
    clearInterval(interval);
  });

  async function getPokemonInfos() {
    const { sprites, types, order } = await getPokemon(pokemonName);

    pokemonImage = sprites.front_default;
    pokemonTypes = types;
    pokemonPokemonId = order;

    loading = false;
  }

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
    goto(`/pokemon/${name}`);
  }

  function displayIndex(id: string | number): string | number {
    if (id <= 9) return `000${id}`;
    else if (id >= 10 && id <= 99) return `00${id}`;
    else if (id >= 100 && id <= 999) return `0${id}`;
    return id;
  }

  function getCardColor(): string {
    const typesName = pokemonTypes.map((type) => type.type.name).shift();

    const genColor = (background, text) =>
      `background-color: ${background}; color: ${text}`;

    const colorsDict = {
      grass: genColor('#b3e1b2', '#f1fff6'),
      fire: genColor('#fcd2b1', '#fff4f0'),
      water: genColor('#b5e8ef', '#f4feff')
    };

    return colorsDict[typesName] || genColor('#d2d2d2', '#eeeeee');
  }
</script>

{#if !loading}
  <article
    class="centered-y-flex"
    on:click={handleNavigation}
    style={getCardColor()}
  >
    <img
      class="pokemon-image"
      src={pokemonImage}
      alt={pokemonName}
      style="transform: scaleX({flipImage})"
    />

    <div class="infos">
      <h2>{capitalizeWord(pokemonName)}</h2>

      <h3 class="types">
        {listToString(
          pokemonTypes.map((type) => capitalizeWord(type.type.name))
        )}
      </h3>
    </div>

    <i class="list-index"><span>#</span>{displayIndex(pokemonPokemonId)}</i>
  </article>
{/if}

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
