<template>
	<FilterGroup title="Производитель">
		<FilterGroupItem type="checkbox" title="Stels" count="10" id="field01" />
		<FilterGroupItem type="checkbox" title="РМ" count="5" id="field02" />
		<FilterGroupItem type="checkbox" title="AODES" count="7" id="field03" />
		<FilterGroupItem type="checkbox" title="ЗЭТ" count="4" id="field04" />
		<FilterGroupShowAll title="Показать всё" />
	</FilterGroup>
	<FilterGroup title="Год выпуска">
		<FilterGroupItem type="checkbox" title="2023" count="10" id="field11" />
		<FilterGroupItem type="checkbox" title="2022" count="5" id="field12" />
		<FilterGroupItem type="checkbox" title="2021" count="7" id="field13" />
		<FilterGroupItem type="checkbox" title="2020" count="4" id="field14" />
	</FilterGroup>
	<FilterColorGroup title="Цвет">
		<FilterColorGroupItem type="checkbox" title="2023" count="10" id="field21" bg-color="#dc2626" />
		<FilterColorGroupItem type="checkbox" title="2022" count="5" id="field22" bg-color="#f97316" />
		<FilterColorGroupItem type="checkbox" title="2021" count="7" id="field23" bg-color="#65a30d" />
		<FilterColorGroupItem type="checkbox" title="2020" count="4" id="field24" bg-color="#52525b" />
	</FilterColorGroup>
	<FilterGroup title="Наличие">
		<FilterGroupItem type="checkbox" title="В наличие" count="7" id="field31" :is-checked="true" />
		<FilterGroupItem type="checkbox" title="Под заказ" count="25" id="field32" />
	</FilterGroup>
</template>

<script setup lang="ts">
import FilterGroupItem from '~/components/goods/filter/FilterGroupItem.vue';
import FilterGroup from '~/components/goods/filter/FilterGroup.vue';
import FilterGroupShowAll from '~/components/goods/filter/FilterGroupShowAll.vue';
import FilterColorGroup from '~/components/goods/filter/FilterColorGroup.vue';
import FilterColorGroupItem from '~/components/goods/filter/FilterColorGroupItem.vue';
</script>

<style scoped></style>
