<template>
	<header class="flex ml-8 mt-8">
		<div>
			<a href="/">
				<img
					src="~/assets/img/adrenaline_quadro.svg"
					class="h-[60px]"
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
