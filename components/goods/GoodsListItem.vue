<template>
	<div class="goods-list__item">
		<div
			v-if="isNew"
			class="absolute top-0 right-0 bg-main rounded-tr-lg rounded-bl-lg py-1 px-2 text-sm text-white"
		>
			НОВИНКА
		</div>
		<picture>
			<img src="/images/quadro-sample.jpg" alt="Sample Quadro" />
		</picture>
		<div class="goods-list__item-info">
			<h4>
				<span class="laquo">&laquo;</span>{{ model }}&raquo;<span class="space"></span>
				<span v-if="modelAddon" class="model-info">
					{{ modelAddon }}
				</span>
			</h4>
			<h5>{{ brand }}</h5>
			<div class="price">{{ price }}</div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	img: {
		type: String,
		default: '/src/images/quadro-sample.jpg',
	},
	model: String,
	modelAddon: String,
	brand: String,
	price: {
		type: String,
		default: 'по запросу',
	},
	isNew: {
		type: Boolean,
		default: false,
	},
});
</script>

<style scoped lang="postcss">
.goods-list__item {
	@apply relative flex flex-col bg-second rounded-lg;
	width: calc(50% - 0.5rem);
	picture {
		@apply w-full h-[148px] sm:h-[212px] rounded-tl-lg rounded-tr-lg bg-second object-contain;
		img {
			@apply rounded-tl-lg rounded-tr-lg mx-auto;
		}
	}
	h3 {
		@apply flex flex-wrap justify-start font-normal text-dark mb-0;
		.model-info {
			@apply text-dark-gray text-sm;
		}
	}
	h4 {
		@apply text-sm font-normal text-dark-gray mb-0;
	}
	.laquo {
		margin-left: -0.625rem;
	}
	.space {
		margin-right: 0.625rem;
	}
	.price {
		@apply flex flex-grow justify-stretch items-end;
	}
}
.goods-list__item-info {
	@apply flex flex-col flex-grow p-4;
}
@media (min-width: 640px) {
	.goods-list__item {
		width: calc(20% - 0.825rem);
		height: 320px;
	}
}
</style>
