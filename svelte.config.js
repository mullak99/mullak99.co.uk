import adapter from '@sveltejs/adapter-static';
import { sveltePreprocess } from 'svelte-preprocess';

export default {
	kit: {
		adapter: adapter({
			pages: 'build', // Directory to output the static pages
			assets: 'build', // Directory to output the static assets
			fallback: null, // Fallback page for SPA routes (e.g., '200.html')
			precompress: true, // Precompress the files for serving with compression
			strict: true, // Strict mode for better error messages
			trailingSlash: 'ignore' // Ignore trailing slashes in URLs
		}),

		prerender: {
			entries: ['*'] // Prerender all routes by default
		}
	},

	preprocess: sveltePreprocess()
};
