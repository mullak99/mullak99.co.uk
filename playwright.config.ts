import { devices } from '@playwright/test';
import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'yarn build && yarn preview',
		port: 4173
	},
	testDir: 'tests/e2e',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

config.projects = [
	{
		name: 'chromium',
		use: {
			...devices['Desktop Chrome'],
			viewport: { width: 1280, height: 720 },
			launchOptions: {
				args: [
					'--font-render-hinting=none',
					'--disable-skia-runtime-opts',
					'--disable-system-font-check',
					'--disable-font-subpixel-positioning',
					'--disable-lcd-text'
				]
			}
		}
	},
	{
		name: 'firefox',
		use: {
			...devices['Desktop Firefox'],
			viewport: { width: 1280, height: 720 },
			launchOptions: {
				firefoxUserPrefs: {
					'gfx.font_rendering.cleartype_params.rendering_mode': 5,
					'gfx.font_rendering.cleartype_params.force_gdi_classic_for_families': '',
					'gfx.font_rendering.cleartype_params.force_gdi_classic_max_size': 0,
					'gfx.font_rendering.cleartype.use_for_downloadable_fonts': false,
					'gfx.font_rendering.directwrite.enabled': false,
					'gfx.canvas.azure.backends': 'skia'
				}
			}
		}
	},
	{
		name: 'webkit',
		use: {
			...devices['Desktop Safari'],
			viewport: { width: 1280, height: 720 },
			launchOptions: {
				env: {
					WEBKIT_DISABLE_SKIA_RUNTIME_OPTS: '1',
					WEBKIT_DISABLE_SYSTEM_FONT_CHECK: '1',
					WEBKIT_DISABLE_FONT_SUBPIXEL_POSITIONING: '1',
					WEBKIT_DISABLE_LCD_TEXT: '1'
				}
			}
		}
	}
];

export default config;
