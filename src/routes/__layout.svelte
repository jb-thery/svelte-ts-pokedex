<script>
  import 'normalize.css/normalize.css';
</script>

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
    }
  }

  main {
    position: relative;
    padding: 30px;
    max-width: 100%;

    @media (min-width: 640px) {
      max-width: 600px;
      margin: 0 auto;
    }
  }
</style>
