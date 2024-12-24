/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				'3xl': '1600px',
				'4xl': '1920px',
				'5xl': '2240px',
				'6xl': '2560px',
				'7xl': '2880px',
				'8xl': '3200px'
			}
		}
	},
	plugins: []
};
