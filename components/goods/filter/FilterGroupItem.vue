<template>
	<div class="filter-group-item">
		<input :id="id" :name="name" :type="type" :value="value" :checked="isChecked" />
		<label :for="id">
			<span>
				{{ title }} <i v-if="count > 0">({{ count }})</i>
			</span>
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
	isChecked: {
		type: Boolean,
		default: false,
	},
});
</script>

<style scoped lang="postcss">
.filter-group-item {
	@apply my-2 flex items-center;
}
.filter-group-item > label {
	@apply flex relative items-center;
}
.filter-group-item > label::before {
	@apply block w-4 h-4 border-2 rounded border-dark-gray transition-all;
	content: ' ';
}
.filter-group-item > input[type='checkbox'] {
	@apply absolute w-4 h-4 opacity-0 z-20;
}
.filter-group-item > input[type='checkbox']:checked + label::before {
	@apply border-dark border bg-main;
}
.filter-group-item > input[type='checkbox']:checked + label::after {
	@apply block absolute top-[6px] left-[3px] w-2.5 h-2 z-10;
	content: ' ';
	background: url('/images/ok_sign.svg') no-repeat left top;
}
.filter-group-item label > span {
	@apply ml-2 text-second text-sm;
}
.filter-group-item label > span > i {
	@apply text-dark-gray not-italic;
}
</style>
