import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

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
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    target: '#svelte'
  }
};

export default config;
