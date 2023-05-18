<template>
	<li class="text-second">
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
