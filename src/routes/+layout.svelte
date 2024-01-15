<script lang="ts">
	import { page } from '$app/stores';
	import Header from '$lib/components/Header.svelte';
	import { ProgressBar } from '@prgm/sveltekit-progress-bar';
	import { CodeSolid, HeartRegular } from 'svelte-awesome-icons';
	import { MetaTags } from 'svelte-meta-tags';
	import SvelteTheme from 'svelte-themes/SvelteTheme.svelte';
	import '../app.css';
	$: location = $page.data.location;
</script>

<ProgressBar class="text-gray-600" />
<MetaTags
	title={`${location.name} - Weather Forecast`}
	description={`${location.name} weather forecast with current conditions, wind, air quality, and what to expect for the next 3 days.`}
/>

<SvelteTheme attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange />

<Header />
<main class="flex-grow">
	<slot />
</main>

<footer class="py-4">
	<div
		class="group flex items-center justify-center gap-1 text-neutral-400 dark:text-neutral-600"
		aria-hidden={true}
	>
		<CodeSolid class="h-5 w-5" />
		<span>by</span>
		<HeartRegular class="h-4 w-4 group-hover:text-red-500" />
		<span>Max</span>
	</div>
</footer>
