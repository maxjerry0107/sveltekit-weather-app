<script>
	import { buttonClass, buttonSizes, buttonVariants } from '$lib/constants';
	import { cn } from '$lib/utils';
	import { GithubBrand } from 'svelte-awesome-icons';
	import SearchCityDialog from './SearchCityDialog.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<nav class="flex w-full items-center justify-between py-4">
	<div />
	<div class="flex w-full gap-2 sm:w-fit">
		<SearchCityDialog />
		<ThemeSwitcher />
		<a
			aria-label="Support project"
			href={'https://github.com/maxjerry0107/sveltekit-weather-app'}
			class="shrink-0"
		>
			<button class={cn(buttonClass, buttonVariants.default, buttonSizes.default, 'h-9')}>
				<GithubBrand class="h-4 w-4 md:mr-1" />
				<span class="hidden md:block">Support Project</span>
			</button>
		</a>
	</div>
</nav>
