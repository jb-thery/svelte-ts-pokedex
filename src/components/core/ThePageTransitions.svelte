<script>
  import { fly } from 'svelte/transition';

  export let refresh = '';
</script>

{#key refresh}
  <div
    in:fly={{ y: -50, duration: 250, delay: 250 }}
    out:fly={{ y: -50, duration: 100 }}
  >
    <slot />
  </div>
{/key}
