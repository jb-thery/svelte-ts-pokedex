<script>
  import 'normalize.css/normalize.css';
</script>

<img class="picto" src="/pokeball.png" alt="pockeball" />

<main class="app-grid">
  <slot />
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

  a,
  p,
  i {
    margin: 0;
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
    padding: 60px 30px;
    max-width: 100%;

    @media (min-width: 640px) {
      max-width: 600px;
      margin: 0 auto;
    }
  }
</style>
