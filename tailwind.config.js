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
				'main-back': '#262626',
				second: '#d7d7d9',
				'dark-gray': '#727273',
			},
		},
	},
};
