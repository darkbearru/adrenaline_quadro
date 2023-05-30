<template>
	<input type="checkbox" class="hidden" id="mainMenuToggle" autocomplete="off" />
	<label for="mainMenuToggle" class="main-menu__toggle" @click="menuToggle"><span></span></label>
	<nav
		class="hidden flex-col flex-1 items-center w-full h-0 sm:w-auto sm:h-[33px] transition-all duration-700 sm:relative sm:flex"
	>
		<ul
			class="flex flex-wrap justify-center items-center w-full max-w-5xl mt-8 mr-8 pl-8 sm:flex-nowrap sm:justify-between sm:h-full sm:mt-0"
		>
			<slot />
			<li class="w-full py-4 sm:w-auto sm:py-0">
				<label
					for="siteSearch"
					class="p-1 flex items-center group border rounded-lg border-second sm:border-transparent sm:hover:border-dark-gray"
				>
					<SvgIconSearch
						class="fill-second sm:group-hover:fill-dark-gray w-5 h-5 sm:group-hover:ml-1 sm:group-hover:mr-2"
					/>
					<input
						type="text"
						class="bg-transparent transition-all outline-none text-second text-2xl sm:w-0 sm:text-base sm:focus:outline-none sm:group-hover:w-48 sm:focus:w-48"
					/>
				</label>
			</li>
		</ul>
		<hr class="hidden sm:block absolute top-[38px] w-full h-[3px] ml-[-2px] bg-main border-0" />
	</nav>
</template>

<script setup lang="ts">
const menuToggle = (): void => {
	document.body.classList.toggle('overflow-hidden');
};
</script>

<style scoped lang="postcss">
.main-menu__toggle {
	@apply relative block overflow-hidden mt-1 min-w-[38px] w-[38px] h-[36px] sm:hidden transition-all border border-dark-gray rounded-lg hover:border-second hover:bg-dark-gray hover:bg-opacity-30;
	&::before,
	&::after,
	span {
		@apply content-['_'] absolute block left-2 w-5 h-[2px] transition-all bg-second;
	}
	&::before {
		@apply top-2;
	}
	&::after {
		@apply bottom-2;
	}
	span {
		@apply top-4;
	}
	&:hover {
		&::before,
		&::after,
		span {
			@apply bg-white;
		}
	}
}
input[type='checkbox']:checked + .main-menu__toggle {
	&::before {
		@apply left-1.5 w-6 top-4 rotate-45;
	}
	&::after {
		@apply left-1.5 w-6 bottom-4 rotate-[-45deg];
	}
	span {
		@apply left-[-9rem] opacity-0;
	}
}
input[type='checkbox']:checked + .main-menu__toggle + nav {
	@apply absolute flex z-40 left-0 top-[76px] w-full h-screen bg-main-back bg-opacity-80 backdrop-blur-sm;
}
</style>
