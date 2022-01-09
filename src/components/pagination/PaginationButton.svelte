<script lang="ts">
  import { currentPage } from '../../stores/global';

  export let page: number;

  function handleChangePage() {
    currentPage.set(page);
  }
</script>

<button on:click={handleChangePage}>
  <span>{page + 1}</span>
</button>

<style lang="scss">
  button {
    cursor: pointer;
    background: $grey-light;
    color: $grey;
    font-family: $heading-font;
    font-size: 1.2rem;
    margin: 4px 8px;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
