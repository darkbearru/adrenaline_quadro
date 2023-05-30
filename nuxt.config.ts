// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/robots', '@nuxtjs/google-fonts'],
	//@ts-ignore
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
		},
	},
	googleFonts: {
		display: 'swap',
		preconnect: true,
		families: {
			'Fira+Sans': {
				wght: [400, 700, 900],
				ital: [400, 900],
			},
		},
	},
});
