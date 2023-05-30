<template>
	<footer class="relative bg-dark-gray border-t-[8px] border-main">
		<img
			src="/images/footer_heart_beat_rate.svg"
			class="absolute right-0 mt-[-33px] h-[52px]"
			alt=""
		/>
		<section class="flex flex-wrap gap-4 mx-4 mt-8 mb-3 sm:my-8 sm:flex-nowrap md:mx-0">
			<div class="flex w-full sm:w-2/12 justify-center sm:justify-end">
				<SvgIcon name="Logo" class="fill-dark w-[172px] h-[40px]" />
			</div>
			<div class="w-full sm:w-10/12 text-lg text-center text-dark">
				Чита, ул. Нечаева, 81,
				<a
					href="tel:83022555050"
					class="hover:text-main-dark hover:underline hover:decoration-main-dark"
				>
					<span class="text-base">8 (3022)</span> 55-50-50 </a
				>,
				<a
					href="tel:89148085050"
					class="hover:text-main-dark hover:underline hover:decoration-main-dark"
				>
					<span class="text-base">8 914</span> 808 5050
				</a>
			</div>
		</section>
		<section class="flex flex-wrap sm:flex-nowrap gap-4 pb-12">
			<div class="hidden md:block w-3/12"></div>
			<div
				class="flex flex-wrap justify-center w-full gap-2 mx-4 sm:flex-nowrap sm:justify-between md:w-7/12 md:gap-0 md:mx-0"
			>
				<ul>
					<li class="font-bold my-2"><a href="">Квадроциклы</a></li>
					<li class="my-2"><a href="">Stels</a></li>
					<li class="my-2"><a href="">Aodes</a></li>
					<li class="my-2"><a href="">РМ</a></li>
					<li class="my-2"><a href="">ЗЭТ</a></li>
				</ul>
				<ul>
					<li class="font-bold my-2"><a href="">Снегоходы</a></li>
					<li class="my-2"><a href="">Stels</a></li>
					<li class="my-2"><a href="">Aodes</a></li>
					<li class="my-2"><a href="">РМ</a></li>
					<li class="my-2"><a href="">ЗЭТ</a></li>
				</ul>
				<ul>
					<li class="font-bold my-2"><a href="">Лодки/моторы</a></li>
					<li class="my-2"><a href="">Stels</a></li>
					<li class="my-2"><a href="">Aodes</a></li>
					<li class="my-2"><a href="">РМ</a></li>
					<li class="my-2"><a href="">ЗЭТ</a></li>
				</ul>
				<ul>
					<li class="font-bold my-2"><a href="">Аксессуары</a></li>
					<li class="my-2"><a href="">Stels</a></li>
					<li class="my-2"><a href="">Aodes</a></li>
					<li class="my-2"><a href="">РМ</a></li>
					<li class="my-2"><a href="">ЗЭТ</a></li>
				</ul>
				<ul>
					<li class="font-bold my-2"><a href="">Прочее</a></li>
					<li class="my-2"><a href="">Stels</a></li>
					<li class="my-2"><a href="">Aodes</a></li>
					<li class="my-2"><a href="">РМ</a></li>
					<li class="my-2"><a href="">ЗЭТ</a></li>
				</ul>
			</div>
			<div class="hidden md:block w-3/12"></div>
		</section>
	</footer>
	<CommonSvgSprite />
</template>

<script setup lang="ts">
import CommonSvgSprite from '~/components/svg/CommonSvgSprite.vue';
</script>

<style scoped></style>
