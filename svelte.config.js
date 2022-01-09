import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      scss: {
        prependData: `@import 'src/styles/global.scss';`,
        outputStyle: 'compressed'
      },
      preserve: ['ld+json']
    })
  ],

  kit: {
    target: '#svelte',
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    paths: {
      base: dev ? '' : '/svelte-ts-pokedex'
    }
  }
};

export default config;
