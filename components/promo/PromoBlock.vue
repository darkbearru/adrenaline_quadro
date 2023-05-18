<template>
	<li
		class="promo-block"
		:class="{
			'w-[50%] md:w-[40%]': blockStatus === PromoBlockStatus.Active,
			'w-[20%]': blockStatus === PromoBlockStatus.NotActive,
			'w-[10%] md:w-[6%] ml-[-5%]': blockStatus === PromoBlockStatus.Start,
			'w-[10%] md:w-[6%] mr-[-5%]': blockStatus === PromoBlockStatus.End,
		}"
		:title="title"
	></li>
</template>

<script setup lang="ts">
import { PromoBlockStatus } from '~/types/types';

defineProps({
	blockStatus: {
		type: Number,
		default: 0,
	},
	title: String,
});
</script>

<style scoped lang="postcss">
.promo-block {
	@apply skew-x-[-7deg] rounded-lg md:rounded-xl xl:rounded-2xl transition-[width] overflow-hidden h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px];
}
</style>
