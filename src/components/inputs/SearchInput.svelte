<script>
  import Icon from 'mdi-svelte';
  import { mdiMagnify } from '@mdi/js';
  import { allPokemons, pokemons } from '../../stores/global';

  let allPokemonsBase = [];
  let resultsLength = 200;

  allPokemons.subscribe((value) => {
    allPokemonsBase = value;
  });

  function handleSearch(event) {
    const { value } = event.target;

    pokemons.update(() => {
      const filtered = allPokemonsBase.filter((pokemon) =>
        pokemon.name.toLowerCase().trim().includes(value.toLowerCase().trim())
      );

      resultsLength = filtered.length;

      return filtered;
    });
  }
</script>

<article>
  <div class="centered-y-flex">
    <label for="search">
      <Icon path={mdiMagnify} color="#929395" />
    </label>

    <input
      id="search"
      type="text"
      on:input={handleSearch}
      placeholder="Filter pokemon by name"
    />

    <span>{resultsLength} results</span>
  </div>

  <p>
    This list represents the order of Pokémon in the National Pokédex. Name or
    number. Use the advanced search to find Pokémon by type, weakness, talent,
    and more !
  </p>
</article>

<style lang="scss">
  div {
    background: $grey-light;
    border-radius: 50px;
    padding: 0 1.5rem;

    input {
      flex: 1;
      background: none;
      padding: 1rem 1rem;
      outline: none;
      border: none;
      color: $grey;

      &::placeholder {
        opacity: 0.5;
        font-size: 0.9rem;

        @media (min-width: 640px) {
          font-size: 0.9rem;
        }
      }
    }

    span {
      font-size: 0.8rem;
      opacity: 0.5;

      @media (min-width: 640px) {
        font-size: 0.9rem;
      }
    }
  }

  p {
    margin-top: 10px;
  }
</style>
