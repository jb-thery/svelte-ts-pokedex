<script lang="ts">
  import { itemsPerPage } from '../../stores/global.ts';
</script>

{#each new Array($itemsPerPage).fill(null) as i}
  <aside />
{/each}

<style lang="scss">
  aside {
    height: 110px;
    animation: loading 1200ms infinite ease-in-out;
    border-radius: 30px;

    @keyframes loading {
      0% {
        background: $grey-light;
      }
      50% {
        background: $grey-medium;
      }
      100% {
        background: $grey-light;
      }
    }
  }
</style>
