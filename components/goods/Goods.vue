<template>
	<section class="relative sm:container sm:flex items-start m-4 sm:m-8 gap-4">
		<FilterToggle class="filter-toggle" class-name="filter-toggle" />
		<aside class="sm:w-2/12 sm:static">
			<label for="filterToggle" class="p-2">x</label>
			<div>
				<Filter />
			</div>
		</aside>
		<section class="w-full sm:w-10/12">
			<GoodsList />
		</section>
	</section>
</template>

<script setup lang="ts">
import Filter from '~/components/goods/filter/Filter.vue';
import FilterToggle from '~/components/goods/filter/FilterToggle.vue';
</script>

<style scoped lang="postcss">
@media (max-width: 639px) {
	.filter-toggle {
		& + label + aside {
			display: none;
			width: 100%;
		}
		&:checked {
			& + label + aside {
				@apply block absolute z-10 -left-4 w-screen overflow-y-scroll pt-8 pr-8 pl-14 pb-8 bg-main-back bg-opacity-90 backdrop-blur-sm;
				div {
					@apply flex flex-wrap;
				}
			}
		}
	}
}
</style>
