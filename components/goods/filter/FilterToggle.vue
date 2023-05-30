<template>
	<input type="checkbox" id="filterToggle" class="hidden" :class="className" autocomplete="off" />
	<label
		for="filterToggle"
		class="absolute inline-block top-[3.25rem] z-20 sm:hidden p-2 transition-all border border-dark-gray rounded-lg hover:border-second hover:bg-dark-gray hover:bg-opacity-30"
	>
		<SvgIconFilter class="fill-second group-hover:fill-white w-5 h-5" />
	</label>
</template>

<script setup lang="ts">
const props = defineProps({
	className: String,
	class: String,
});
</script>

<style scoped lang="postcss">
input[type='checkbox']:checked {
	& + label {
		@apply bg-second border-black;
		svg {
			@apply fill-dark;
		}
	}
}
</style>
