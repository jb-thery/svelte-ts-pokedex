<script>
  import PokeCard from '../components/cards/PokeCard.svelte';
  import SearchInput from '../components/inputs/SearchInput.svelte';
  import Pagination from '../components/pagination/Pagination.svelte';
</script>

<svelte:head>
  <title>Svelte Typescript Pokedex</title>

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
  <PokeCard />
  <PokeCard />
  <PokeCard />
  <PokeCard />
  <PokeCard />
  <PokeCard />
  <PokeCard />
</section>

<nav>
  <Pagination />
</nav>

<style lang="scss">
  h1 {
    color: $red;
  }
</style>
