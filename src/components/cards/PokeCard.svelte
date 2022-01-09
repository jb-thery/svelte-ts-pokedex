<script lang="ts">
  import { goto } from '$app/navigation';
  import { onDestroy, onMount } from 'svelte';
  import type { Types } from '../../types';
  import { capitalizeWord, listToString } from '../../helpers/globals.ts';

  export let listIndex: number;
  export let name: string;
  export let images: [string, string];
  export let types: Types[];

  let interval = null;
  let currentImage = null;

  onMount(() => {
    let count = 0;

    interval = setInterval(() => {
      currentImage = count % 2 === 0 ? images[0] : images[1];
      count++;
    }, 1000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });

  function handleNavigation(): void {
    goto('/pokemon/test');
  }

  function displayIndex(index: number): string | number {
    const currentIndex = index + 1;

    if (currentIndex <= 9) return `00${currentIndex}`;
    else if (currentIndex >= 10 && currentIndex <= 99)
      return `0${currentIndex}`;
    return currentIndex;
  }

  function getCardColor(): { background: string; text: string } {
    const typesName = types.map((type) => type.type.name).shift();

    const genColor = (background, text) => ({
      background,
      text
    });

    switch (typesName) {
      case 'grass':
        return genColor('#b3e1b2', '#f1fff6');
      case 'fire':
        return { background: '#fcd2b1', text: '#fff4f0' };
      case 'water':
        return { background: '#b5e8ef', text: '#f4feff' };
      default:
        return { background: '#d2d2d2', text: '#eeeeee' };
    }
  }
</script>

<article
  class="centered-y-flex"
  on:click={handleNavigation}
  style="background-color: {getCardColor().background}; color: {getCardColor()
    .text}"
>
  <img class="pokemon-image" src={currentImage} alt={name} />

  <div class="infos">
    <h2>{capitalizeWord(name)}</h2>

    <h3 class="types">
      {listToString(types.map((type) => capitalizeWord(type.type.name)))}
    </h3>
  </div>

  <i class="list-index"><span>#</span>{displayIndex(listIndex)}</i>
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
      font-size: $xl;
      font-style: normal;
      letter-spacing: -2px;

      span {
        font-size: $m;
      }
    }
  }
</style>
