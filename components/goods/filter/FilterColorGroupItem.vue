<template>
	<div class="filter-color-item">
		<input :id="id" :name="name" :type="type" :value="value" />
		<label :for="id" :title="title">
			<span :style="{ backgroundColor: bgColor }"></span>
		</label>
	</div>
</template>

<script setup lang="ts">
defineProps({
	id: String,
	type: String,
	title: String,
	count: String,
	value: String,
	name: String,
	bgColor: String,
});
</script>

<style scoped lang="postcss">
.filter-color-item {
	@apply my-2 flex items-center;
}
.filter-color-item > label {
	@apply block w-6 h-6 rounded-xl border-2 border-dark-gray transition-all;
}
.filter-color-item > label > span {
	@apply block w-full h-full border-2 rounded-xl border-main-back transition-all opacity-60;
}
.filter-color-item > input[type='checkbox'] {
	@apply absolute w-6 h-6 opacity-0 z-20;
}
.filter-color-item > input[type='checkbox']:checked + label {
	@apply border border-main;
}
.filter-color-item > input[type='checkbox']:checked + label > span {
	@apply opacity-100;
}
</style>
