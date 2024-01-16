<script lang="ts">
	export let feels_like: number;
	export let temperature: number;
</script>

<div
	class="relative order-7 flex h-48 flex-col justify-between rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:p-6"
>
	<div class="flex flex-col space-y-1.5 pb-4">
		<div
			class="flex flex-row items-center gap-2 text-sm font-semibold leading-none tracking-tight text-neutral-600 dark:text-neutral-400 md:text-base md:font-medium"
		>
			<i>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-4 w-4"
				>
					<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
				</svg>
			</i>
			Feels like
		</div>
	</div>
	<div class="font-semibold md:text-lg">
		<p>{Math.floor(feels_like)}&deg;</p>
	</div>
	<div class="mt-auto flex items-center pt-0 text-xs md:text-sm">
		<p>
			{feels_like < temperature
				? 'Feels colder than the actual temperature.'
				: feels_like > temperature
					? 'Feels warmer than the actual temperature.'
					: 'Feels like the actual temperature.'}
		</p>
	</div>
</div>
