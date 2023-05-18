<template>
	<div>
		<NuxtLayout>
			<PromoBlocks />
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
	htmlAttrs: {
		lang: 'ru',
	},
	bodyAttrs: {
		class: 'bg-main-back',
	},
});
</script>

<style scoped></style>
