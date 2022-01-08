<script>
  import Icon from 'mdi-svelte';
  import { mdiMagnify } from '@mdi/js';
</script>

<article>
  <div class="centered-y-flex">
    <label for="search">
      <Icon path={mdiMagnify} color="#929395" />
    </label>

    <input id="search" type="text" />
  </div>

  <p>
    This list represents the order of Pokémon in the National Pokédex. Name or number. Use the
    advanced search to find Pokémon by type, weakness, talent, and more !
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
    }
  }

  p {
    margin-top: 10px;
  }
</style>
