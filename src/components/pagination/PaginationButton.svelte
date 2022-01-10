<script lang="ts">
  import { currentPage } from '../../stores/global';

  export let page: number;

  let activePage = 0;

  currentPage.subscribe((value) => {
    activePage = value;
  });

  function handleChangePage() {
    window.scrollTo(0, 0);
    currentPage.set(page);
  }
</script>

<button on:click={handleChangePage} class={page === activePage && 'active'}>
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

  .active {
    background: $red;
    color: $white;
  }
</style>
