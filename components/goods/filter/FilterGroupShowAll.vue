<template>
	<div class="flex justify-center">
		<a href="" class="text-sm text-dark-gray underline hover:text-second hover:no-underline">{{
			title
		}}</a>
	</div>
</template>

<script setup lang="ts">
defineProps({
	title: String,
});
</script>

<style scoped></style>
