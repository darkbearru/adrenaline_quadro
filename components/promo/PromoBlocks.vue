<template>
	<section class="h-full mt-8 w-full overflow-hidden">
		<ul class="flex gap-2 md:gap-4 h-full">
			<PromoBlock class="bg-main" :blockStatus="PromoBlockStatus.Start" />
			<PromoBlock
				class="bg-dark-gray"
				v-for="(item, index) in promoBlocks"
				:key="item.id"
				:title="item.title"
				:blockStatus="item.status"
				@click="changeBlockStatus(index)"
			/>
			<PromoBlock class="bg-main" :blockStatus="PromoBlockStatus.End" />
		</ul>
	</section>
</template>

<script setup lang="ts">
import { PromoBlockStatus } from '~/types/types';
import promoBlockData from '~/data/promoBlockData.json';
const promoBlocks = reactive(
	promoBlockData.map(({ id, title }, index) => ({
		id,
		title,
		status: index === 0 ? PromoBlockStatus.Active : PromoBlockStatus.NotActive,
	})),
);

const changeBlockStatus = (selected: String | Number) => {
	promoBlocks.forEach((item, index) => {
		promoBlocks[index].status =
			index === selected ? PromoBlockStatus.Active : PromoBlockStatus.NotActive;
	});
};
</script>

<style scoped></style>
