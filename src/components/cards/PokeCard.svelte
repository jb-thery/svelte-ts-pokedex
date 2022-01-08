<script lang="ts">
  import { goto } from '$app/navigation';

  function handleNavigation(): void {
    goto('/pokemon/test');
  }
</script>

<article class="centered-y-flex" on:click={handleNavigation}>
  <img src="https://via.placeholder.com/120x120" alt="" />

  <div class="infos">
    <h2>Pokemon</h2>

    <div>
      <img src="https://via.placeholder.com/20x20" alt="" />
      <img src="https://via.placeholder.com/20x20" alt="" />
    </div>
  </div>

  <i class="list-index"><span>#</span>001</i>
</article>

<style lang="scss">
  article {
    position: relative;
    background: $green;
    border-radius: 30px;
    padding: 10px 20px;
    cursor: pointer;

    .infos {
      padding-left: 10px;

      h2 {
        color: $white;
        font-size: $l-mobile;

        @media (min-width: 640px) {
          font-size: $l;
        }
      }

      img {
        margin-top: 5px;
        margin-right: 10px;
      }
    }

    i {
      font-family: $heading-font;
      position: absolute;
      bottom: 0;
      right: 10px;
      font-size: $xl;
      color: $green-light;
      font-style: normal;
      letter-spacing: -2px;

      span {
        font-size: $m;
      }
    }
  }
</style>
