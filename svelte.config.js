import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			scss: {
				prependData: `@import 'src/styles/variables.scss';`,
				outputStyle: 'compressed'
			},
			preserve: ['ld+json']
		})
	],

	kit: {
		adapter: adapter(),
		target: '#svelte'
	}
};

export default config;
