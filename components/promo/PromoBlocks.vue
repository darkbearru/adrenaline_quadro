<template>
	<section class="h-full mt-8 mb-10 w-full overflow-x-clip hidden sm:block">
		<ul class="flex gap-2 md:gap-4">
			<PromoBlock :blockStatus="PromoBlockStatus.Start" />
			<PromoBlock
				v-for="(item, index) in promoBlocks"
				:key="item.id"
				:title="item.title"
				:blockStatus="item.status"
				:imgActive="item.active"
				:imgNormal="item.normal"
				@click="changeBlockStatus(index)"
			/>
			<PromoBlock :blockStatus="PromoBlockStatus.End" />
		</ul>
	</section>
</template>

<script setup lang="ts">
import { PromoBlockStatus } from '~/types/types';
import promoBlockData from '~/data/promoBlockData.json';
const promoBlocks = reactive(
	promoBlockData.map(({ id, title, img_active, img }, index) => ({
		id,
		title,
		active: img_active,
		normal: img,
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
