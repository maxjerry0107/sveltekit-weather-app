<script lang="ts">
	import { onMount } from 'svelte';
	export let timeZone: string;
	let time: Date = new Date();

	onMount(() => {
		const timer = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => clearInterval(timer);
	});
</script>

<div class="tabular-nums">
	{time.toLocaleTimeString('en-US', {
		timeZone,
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	})}
</div>
