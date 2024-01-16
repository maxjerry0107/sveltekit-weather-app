<script lang="ts">
	import { DEFAULT_SUGGESTIONS } from '$lib/constants';
</script>

<div class="relative order-last hidden h-[25rem] w-full flex-col justify-between lg:block">
	<h3 class="py-3 font-semibold">Other large cities</h3>
	<div class="flex flex-col space-y-3.5">
		{#each DEFAULT_SUGGESTIONS as item}
			<a
				href={`/${item}`}
				class="rounded-lg border bg-card px-6 py-4 text-card-foreground shadow-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
			>
				{item}
			</a>
		{/each}
	</div>
</div>
