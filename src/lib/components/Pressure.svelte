<script lang="ts">
	export let pressure: number;
</script>

<div
	class="relative order-10 flex h-48 flex-col justify-between rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:p-6"
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
					<path d="m12 14 4-4" />
					<path d="M3.34 19a10 10 0 1 1 17.32 0" />
				</svg>
			</i>
			Pressure
		</div>
	</div>
	<div class="font-semibold md:text-lg">
		<p>{pressure} hPa</p>
	</div>
	<div class="mt-auto flex items-center pt-0 text-xs md:text-sm">
		<p>
			{pressure < 1000
				? 'Low pressure. Expect changes in the weather.'
				: pressure >= 1000 && pressure <= 1010
					? 'Normal pressure. Typical weather conditions.'
					: 'High pressure. Expect stable and clear weather.'}
		</p>
	</div>
</div>
