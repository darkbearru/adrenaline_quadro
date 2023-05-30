/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	theme: {
		extend: {
			colors: {
				main: '#F24B0F',
				second: '#d7d7d9',
				dark: '#171717',
				'main-dark': '#b23203',
				'main-back': '#262626',
				'dark-gray': '#727273',
			},
		},
		fontFamily: {
			sans: ['Fira Sans', 'sans-serif'],
		},
	},
};
