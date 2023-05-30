<template>
	<a
		:href="href"
		class="block border border-dark-gray rounded-lg text-second hover:border-second hover:bg-dark-gray hover:text-white hover:bg-opacity-30"
		><slot
	/></a>
</template>

<script setup lang="ts">
defineProps({
	href: {
		type: String,
		default: '',
	},
});
</script>

<style scoped></style>
