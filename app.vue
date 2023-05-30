<template>
	<div>
		<NuxtLayout>
			<PromoBlocks />
			<Goods />
		</NuxtLayout>
	</div>
</template>

<script lang="ts" setup>
useHead({
	title: 'Адреналин. Охота, Туризм, Рыбалка',
	meta: [
		{
			name: 'description',
			content: 'Сеть магазинов «Адреналин». Товары для охоты, туризма и рыбалки',
		},
		{
			name: 'keywords',
			content:
				'адреналин, адреналин75, охота, туризм, рыбалка, чита, забайкальский край, забайкалье, бурятия',
		},
	],
	link: [
		{
			rel: 'preconnect',
			href: 'https://fonts.googleapis.com',
		},
		{
			rel: 'preconnect',
			href: 'https://fonts.gstatic.com/',
			crossorigin: 'use-credentials',
		},
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,700;0,900;1,700;1,900&display=swap',
		},
	],
	htmlAttrs: {
		lang: 'ru',
	},
	bodyAttrs: {
		class: 'bg-main-back',
	},
});
</script>

<style scoped></style>
