<script lang="ts">
  import PaginationButton from './PaginationButton.svelte';
  import { itemsPerPage, pokemons } from '../../stores/global.ts';

  let buttonMatrix = [];

  pokemons.subscribe((list) => {
    getPaginationButton(list.length);
  });

  function getPaginationButton(listLength): void {
    const buttonsListLength = Math.ceil(listLength / $itemsPerPage);

    buttonMatrix = new Array(buttonsListLength).fill(null);
  }
</script>

<div>
  {#each buttonMatrix as page, i}
    <PaginationButton page={i} />
  {/each}
</div>

<style lang="scss">
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
