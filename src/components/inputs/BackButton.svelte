<script>
  import { mdiArrowLeft } from '@mdi/js';
  import { goto } from '$app/navigation';
  import Icon from 'mdi-svelte';

  const dev = process.env.NODE_ENV === 'development';

  function handleNavigation() {
    goto(dev ? '/' : '/svelte-ts-pokedex');
  }
</script>

<button on:click={handleNavigation}>
  <Icon path={mdiArrowLeft} color="#fff" />
</button>

<style lang="scss">
  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: $red;
    border: none;
    outline: none;
    cursor: pointer;
  }
</style>
