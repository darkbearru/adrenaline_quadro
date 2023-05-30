<template>
	<svg><use :xlink:href="`#svgIcon${name}`"></use></svg>
</template>

<script setup lang="ts">
defineProps({
	name: String,
});
</script>

<style scoped></style>
