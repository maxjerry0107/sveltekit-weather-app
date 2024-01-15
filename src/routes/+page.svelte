<script lang="ts">
	import { selectedCity } from '$lib/store';
	$: console.log($selectedCity);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{$selectedCity.city}
