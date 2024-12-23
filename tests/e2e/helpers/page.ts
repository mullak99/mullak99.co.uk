import { expect, type Page } from '@playwright/test';

export const doesPageLoad = async (page: Page, path: string) => {
	page.on('console', (msg) => {
		if (msg.type() === 'error') {
			throw new Error(`Console error: ${msg.text()}`);
		}
	});
	await page.goto(path);
	await expect(page.locator('h2')).toBeVisible();
};
