<template>
	<div class="w-6/12 sm:w-full mb-4 px-2 sm:px-0">
		<h4 class="text-sm text-second font-bold">{{ title }}</h4>
		<div class="flex gap-1">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	title: String,
});
</script>

<style scoped></style>
