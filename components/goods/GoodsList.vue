<template>
	<div class="flex justify-end sm:items-center w-full flex-wrap sm:w-auto sm:flex-nowrap mb-6">
		<H3 class="flex-grow mb-4 sm:mb-0">Каталог товаров</H3>
		<div class="flex flex-nowrap gap-2">
			<ButtonOutline class="group p-2">
				<SvgIconSort class="fill-second group-hover:fill-white w-5 h-5" />
			</ButtonOutline>
			<ButtonOutline class="group p-2">
				<SvgIconList class="fill-second group-hover:fill-white w-5 h-5" />
			</ButtonOutline>
		</div>
	</div>
	<div class="flex flex-wrap items-stretch gap-4">
		<GoodsListItem
			:is-new="true"
			model="500 YS Leopard"
			brand="Stels"
			price="553 500 ₽"
		></GoodsListItem>
		<GoodsListItem model="600 YS Leopard" brand="Stels" price="630 000 ₽"></GoodsListItem>
		<GoodsListItem model="650 YS Leopard EFI" brand="Stels" price="640 000 ₽"></GoodsListItem>
		<GoodsListItem
			:is-new="true"
			model="650 YL Leopard EFI"
			brand="Stels"
			price="665 000 ₽"
		></GoodsListItem>
		<GoodsListItem
			:is-new="true"
			model="Guepard 650TE"
			model-addon="(TROPHY) 2.0"
			brand="Stels"
			price="949 000 ₽"
		></GoodsListItem>
		<GoodsListItem model="600 YS Leopard" brand="Stels" price="630 000 ₽"></GoodsListItem>
		<GoodsListItem model="650 YS Leopard EFI" brand="Stels" price="640 000 ₽"></GoodsListItem>
		<GoodsListItem model="600 YS Leopard" brand="Stels" price="630 000 ₽"></GoodsListItem>
		<GoodsListItem model="650 YS Leopard EFI" brand="Stels" price="640 000 ₽"></GoodsListItem>
		<GoodsListItem model="600 YS Leopard" brand="Stels" price="630 000 ₽"></GoodsListItem>
		<GoodsListItem
			:is-new="true"
			model="500 YS Leopard"
			brand="Stels"
			price="553 500 ₽"
		></GoodsListItem>
		<GoodsListItem model="600 YS Leopard" brand="Stels" price="630 000 ₽"></GoodsListItem>
		<GoodsListItem model="650 YS Leopard EFI" brand="Stels" price="640 000 ₽"></GoodsListItem>
		<GoodsListItem
			:is-new="true"
			model="650 YL Leopard EFI"
			brand="Stels"
			price="665 000 ₽"
		></GoodsListItem>
		<GoodsListItem
			:is-new="true"
			model="Guepard 650TE"
			model-addon="(TROPHY) 2.0"
			brand="Stels"
			price="949 000 ₽"
		></GoodsListItem>
		<GoodsListItem model="600 YS Leopard" brand="Stels" price="630 000 ₽"></GoodsListItem>
		<GoodsListItem model="650 YS Leopard EFI" brand="Stels" price="640 000 ₽"></GoodsListItem>
		<GoodsListItem model="600 YS Leopard" brand="Stels" price="630 000 ₽"></GoodsListItem>
	</div>
	<div class="my-4 p-4 flex justify-center">
		<ButtonOutline href="" class="py-2 px-4">Загрузить ещё</ButtonOutline>
	</div>
	<FooterLogoList />
</template>

<script setup lang="ts">
import H3 from '~/components/layout/elements/H3.vue';
import ButtonOutline from '~/components/interface/ButtonOutline.vue';
import SvgIconSort from '~/components/svg/SvgIconSort.vue';
import SvgIconList from '~/components/svg/SvgIconList.vue';
import FooterLogoList from '~/components/layout/elements/FooterLogoList.vue';
</script>

<style scoped></style>
