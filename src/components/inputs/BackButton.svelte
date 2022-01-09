<script>
  import { mdiArrowLeft } from '@mdi/js';
  import { goto } from '$app/navigation';
  import Icon from 'mdi-svelte';

  function handleNavigation() {
    goto('/');
  }
</script>

<button on:click={handleNavigation}>
  <Icon path={mdiArrowLeft} color="#fff" />
</button>

<style lang="scss">
  button {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: $red;
    border: none;
    outline: none;
    cursor: pointer;
  }
</style>
