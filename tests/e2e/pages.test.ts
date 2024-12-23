import { test } from '@playwright/test';
import { doesPageLoad } from './helpers/page';

test('Home page loads', async ({ page }) => {
	await doesPageLoad(page, '/');
});

test('About page loads', async ({ page }) => {
	await doesPageLoad(page, '/about');
});

test('Contact page loads', async ({ page }) => {
	await doesPageLoad(page, '/contact');
});
