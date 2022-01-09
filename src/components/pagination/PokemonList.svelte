<script lang="ts">
  import PokeCard from '../cards/PokeCard.svelte';
  import Pagination from './Pagination.svelte';
  import { paginatedPokemons, pokemonsCount } from '../../stores/global.ts';
</script>

{#each $paginatedPokemons as pokemon}
  <PokeCard
    pokemonName={pokemon.name}
    pokemonImage={pokemon.sprites.front_default}
    pokemonTypes={pokemon.types}
    pokemonPokemonId={pokemon.order}
  />
{/each}

<nav>
  <Pagination listLength={$pokemonsCount} />
</nav>
