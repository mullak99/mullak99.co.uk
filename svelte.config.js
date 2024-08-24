import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

export default {
	kit: {
		adapter: adapter({
			pages: 'build', // Directory to output the static pages
			assets: 'build', // Directory to output the static assets
			fallback: null, // Fallback page for SPA routes (e.g., '200.html')
			precompress: false, // Precompress the files for serving with compression
			strict: true // Strict mode for better error messages
		}),

		prerender: {
			entries: ['*'] // Prerender all routes by default
		}
	},

	preprocess: preprocess()
};
