<script>
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
			<button
				class="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus:ring-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
			>
				<GithubBrand class="h-4 w-4 md:mr-1" />
				<span class="hidden md:block">Support Project</span>
			</button>
		</a>
	</div>
</nav>
