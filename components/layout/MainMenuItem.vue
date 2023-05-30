<template>
	<li class="w-full text-2xl py-4 text-center text-second sm:w-auto sm:text-base sm:py-0">
		<a :href="href" class="text-second hover:text-white">{{ title }}</a>
	</li>
</template>

<script setup lang="ts">
defineProps({
	title: String,
	href: String,
});
</script>

<style scoped></style>
