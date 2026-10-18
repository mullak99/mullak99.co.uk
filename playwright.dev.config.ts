import config from './playwright.config';

export default {
	...config,
	webServer: {
		command: 'pnpm dev --port 4173 --strictPort',
		port: 4173
	},
	testMatch: 'asset-loading.test.ts'
};
