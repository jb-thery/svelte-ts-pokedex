<script>
  import 'normalize.css/normalize.css';
  import PageTransitions from '../components/core/ThePageTransitions.svelte';
  import { page } from '$app/stores';

  const dev = process.env.NODE_ENV === 'development';
</script>

<img
  class="picto"
  src={dev ? '/pokeball.png' : '/svelte-ts-pokedex/pokeball.png'}
  alt="pockeball"
/>

<main>
  <PageTransitions refresh={$page.url.pathname}>
    <slot />
  </PageTransitions>
</main>

<style lang="scss" global>
  :root {
    color: $grey;
    font-family: $text-font;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: $heading-font;
      margin: 0;
    }

    scroll-behavior: smooth;
  }

  a,
  p,
  i {
    margin: 0;
  }

  .flex {
    display: flex;
    align-items: center;
  }

  .centered-flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .centered-y-flex {
    display: flex;
    align-items: center;
  }

  .app-grid {
    display: grid;
    grid-gap: 20px;
  }

  .picto {
    position: fixed;
    top: -190px;
    right: -190px;
    opacity: 0.09;

    @media (min-width: 640px) {
      top: -120px;
      right: -120px;
    }
  }

  main {
    position: relative;
    padding: 30px 15px;
    max-width: 100%;

    @media (min-width: 640px) {
      max-width: 600px;
      margin: 0 auto;
      padding: 60px 30px;
    }
  }

  .scale-on-hover {
    transform: scale(1);
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.02);
    }
  }
</style>
