import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { svelteSitemap } from 'svelte-sitemap/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		enhancedImages(),
		sveltekit({
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				precompress: true,
				strict: true
			}),
			prerender: {
				entries: ['*']
			},
			preprocess: vitePreprocess({ script: true })
		}),
		svelteSitemap({ domain: 'https://mullak99.co.uk' })
	],

	optimizeDeps: {
		exclude: ['@fortawesome/svelte-fontawesome']
	},

	ssr: {
		noExternal: ['@fortawesome/svelte-fontawesome']
	}
});
