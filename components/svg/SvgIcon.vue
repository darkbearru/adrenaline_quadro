<template>
	<svg><use :xlink:href="xlink"></use></svg>
</template>

<script setup lang="ts">
defineProps({
	xlink: String,
});
</script>

<style scoped></style>
