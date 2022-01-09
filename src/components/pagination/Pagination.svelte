<script>
  import PaginationButton from './PaginationButton.svelte';
  import { itemsPerPage } from '../../stores/global.ts';

  export let listLength;

  function getPaginationButton() {
    const buttonsListLength = Math.ceil(listLength / $itemsPerPage);

    return new Array(buttonsListLength).fill(null);
  }
</script>

<div>
  {#each getPaginationButton() as page, i}
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
