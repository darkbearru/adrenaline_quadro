<template>
	<div
		class="flex flex-wrap items-center justify-center gap-4 sm:gap-0 sm:flex-nowrap sm:justify-between max-w-2xl mx-auto mt-2 mb-8"
	>
		<FooterLogo brand="stels" class="w-[170px] h-[50px] sm:h-[100px] object-contain" />
		<FooterLogo brand="rm" class="w-[90px] h-[50px] sm:h-[80px] object-contain" />
		<FooterLogo brand="aodes" class="w-[125px] h-[50px] sm:h-[100px] object-contain" />
		<FooterLogo brand="zet" class="w-[80px] h-[60px] sm:h-[80px] object-contain" />
	</div>
</template>

<script setup lang="ts">
import FooterLogo from '~/components/layout/elements/FooterLogo.vue';
</script>

<style scoped></style>
