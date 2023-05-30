<template>
	<li
		class="promo-block"
		:class="{
			'w-[50%] md:w-[40%]': blockStatus === PromoBlockStatus.Active,
			'w-[20%]': blockStatus === PromoBlockStatus.NotActive,
			'w-[10%] md:w-[6%] ml-[-5%]': blockStatus === PromoBlockStatus.Start,
			'w-[10%] md:w-[6%] mr-[-5%]': blockStatus === PromoBlockStatus.End,
			active: blockStatus === PromoBlockStatus.Active,
		}"
		:title="title"
	>
		<H2>{{ title }}</H2>
		<img
			v-if="blockStatus !== PromoBlockStatus.Start && blockStatus !== PromoBlockStatus.End"
			:src="`${blockStatus === PromoBlockStatus.Active ? imgActive : imgNormal}`"
			alt=""
		/>
		<div
			class="back"
			:class="`${
				blockStatus === PromoBlockStatus.Start || blockStatus === PromoBlockStatus.End
					? 'bg-main'
					: 'bg-dark-gray'
			}`"
		></div>
	</li>
</template>

<script setup lang="ts">
import { PromoBlockStatus } from '~/types/types';
import H2 from '~/components/layout/elements/H2.vue';

defineProps({
	blockStatus: {
		type: Number,
		default: 0,
	},
	title: String,
	imgActive: String,
	imgNormal: String,
});
</script>

<style scoped lang="postcss">
.promo-block {
	@apply relative transition-[width] h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px];
	h2 {
		@apply relative z-10 left-[-100px] top-[130px] rotate-[-83deg] transition-all xl:text-4xl;
	}
	img {
		@apply absolute z-10 transition-all xl:top-[320px] xl:left-[-15px];
		-webkit-mask-image: url(/images/mask.svg);
		mask-image: url(/images/mask.svg);
		mask-repeat: no-repeat;
		mask-size: cover;
		mask-position: -4px top;
	}
	&.active {
		h2 {
			@apply relative z-10 left-12 top-5 rotate-0 text-dark xl:text-6xl;
		}
		img {
			left: 5px;
			top: 98px;
			mask-position: -30px top;
		}
		.back {
			@apply bg-second;
		}
	}
	.back {
		@apply absolute left-0 top-0 z-0 w-full h-full transition-[background-color] skew-x-[-7deg] rounded-lg md:rounded-xl xl:rounded-2xl;
	}
	&:hover {
		.back {
			@apply bg-second;
		}
	}
}
</style>
