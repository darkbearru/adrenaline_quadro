<template>
	<img :src="`/images/logo-${brand}.svg`" :alt="`${brand} logotype`" />
</template>

<script setup lang="ts">
defineProps({
	brand: String,
});
</script>

<style scoped></style>
