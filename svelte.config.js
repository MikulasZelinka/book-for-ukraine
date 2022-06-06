import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import precompileIntl from 'svelte-intl-precompile/sveltekit-plugin';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			// postcss: true,

			scss: {
				prependData: '@use "src/variables.scss" as *;',
			},
		}),
	],

	// https://www.npmjs.com/package/@sveltejs/adapter-static
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
		}),

		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true,
		},

		vite: {
			plugins: [
				precompileIntl('locales'), // if your translations are defined in /locales/[lang].json
			],

			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@use "src/variables.scss" as *;',
					},
				},
			},
		},
	},
};

export default config;
