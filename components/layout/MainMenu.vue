<template>
	<nav class="relative flex flex-col flex-1 items-center h-[33px]">
		<ul class="flex justify-between items-center w-full max-w-5xl h-full mr-8 pl-8">
			<slot />
			<li>
				<label
					for="siteSearch"
					class="p-1 flex items-center group border rounded-lg border-transparent hover:border-dark-gray"
				>
					<SvgSearchIcon
						class="fill-second group-hover:fill-dark-gray w-5 h-5 group-hover:ml-1 group-hover:mr-2"
					/>
					<input
						type="text"
						class="bg-transparent w-0 text-second transition-all outline-none focus:outline-none group-hover:w-48 focus:w-48"
					/>
				</label>
			</li>
		</ul>
		<hr class="absolute top-[38px] w-full h-[3px] ml-[-2px] bg-main border-0" />
	</nav>
</template>

<script setup lang="ts"></script>

<style scoped></style>
