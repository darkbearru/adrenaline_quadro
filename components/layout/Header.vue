<template>
	<header
		class="sticky top-0 flex gap-4 p-4 z-30 bg-main-back bg-opacity-80 backdrop-blur-sm sm:bg-opacity-100 sm:backdrop-blur-none sm:relative sm:ml-8 sm:mt-8 sm:gap-0 sm:mr-0 sm:p-0 sm:top-auto"
	>
		<div class="flex-grow sm:flex-grow-0">
			<a href="/">
				<img
					src="/images/adrenaline_quadro.svg"
					class="min-w-[240px] h-[60px]"
					alt="Адреналин.Квадро. Продажа квадроциклов, лодок/моторов и прочих аксессуаров"
				/>
			</a>
		</div>
		<MainMenu>
			<MainMenuItem title="Квадроциклы" href="" />
			<MainMenuItem title="Лодки/Моторы" href="" />
			<MainMenuItem title="Снегоходы" href="" />
			<MainMenuItem title="Аксессуары" href="" />
		</MainMenu>
	</header>
</template>

<script setup lang="ts">
import MainMenu from '~/components/layout/MainMenu.vue';
import MainMenuItem from '~/components/layout/MainMenuItem.vue';
</script>

<style scoped lang="postcss"></style>
