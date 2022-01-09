<script lang="ts">
  import { goto } from '$app/navigation';
  import { onDestroy, onMount } from 'svelte';
  import type { Types } from '../../types';
  import { capitalizeWord, listToString } from '../../helpers/globals.ts';

  export let pokemonId: string;
  export let name: string;
  export let image: string;
  export let types: Types[];

  let interval = null;
  let flipImage = 1;

  onMount(() => {
    let count = 0;

    interval = setInterval(() => {
      if (count % 2 === 0) {
        flipImage = 1;
      } else {
        flipImage = -1;
      }
      count++;
    }, 1000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });

  function handleNavigation(): void {
    goto('/pokemon/test');
  }

  function displayIndex(id: string | number): string | number {
    if (id <= 9) return `000${id}`;
    else if (id >= 10 && id <= 99) return `00${id}`;
    else if (id >= 100 && id <= 999) return `0${id}`;
    return id;
  }

  function getCardColor(): string {
    const typesName = types.map((type) => type.type.name).shift();

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

<article
  class="centered-y-flex"
  on:click={handleNavigation}
  style={getCardColor()}
>
  <img
    class="pokemon-image"
    src={image}
    alt={name}
    style="transform: scaleX({flipImage})"
  />

  <div class="infos">
    <h2>{capitalizeWord(name)}</h2>

    <h3 class="types">
      {listToString(types.map((type) => capitalizeWord(type.type.name)))}
    </h3>
  </div>

  <i class="list-index"><span>#</span>{displayIndex(pokemonId)}</i>
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
