<script lang="ts">
	export let humidity: number;
</script>

<div
	class="relative order-8 flex h-48 flex-col justify-between rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:p-6"
>
	<div class="flex flex-col space-y-1.5 pb-4">
		<div
			class="flex flex-row items-center gap-2 text-sm font-semibold leading-none tracking-tight text-neutral-600 dark:text-neutral-400 md:text-base md:font-medium"
		>
			<i>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4 fill-black dark:fill-white"
				>
					<path
						d="M16.59 7.41L6.30996 17.69C5.82996 18.17 5.00996 18.06 4.71996 17.45C4.19996 16.38 3.89996 15.17 3.89996 13.9C3.87996 8.38 9.47996 3.66 11.38 2.21C11.75 1.93 12.25 1.93 12.61 2.21C13.48 2.87 15.11 4.24 16.64 6.04C16.98 6.44 16.96 7.04 16.59 7.41Z"
					/>
					<path
						opacity="0.4"
						d="M20.1 13.9098C20.1 18.3698 16.47 21.9998 12 21.9998C10.21 21.9998 8.53996 21.4198 7.18996 20.4198C6.69996 20.0598 6.65996 19.3398 7.08996 18.9098L17.16 8.83977C17.63 8.36977 18.42 8.46978 18.74 9.04978C19.56 10.5598 20.11 12.1998 20.1 13.9098Z"
					/>
				</svg>
			</i>
			Humidity
		</div>
	</div>
	<div class="font-semibold md:text-lg">
		<p>{humidity}&deg;</p>
	</div>
	<div class="mt-auto flex items-center pt-0 text-xs md:text-sm">
		<p>
			{humidity < 40
				? 'Low humidity. It might feel dry.'
				: humidity < 70
					? 'Moderate humidity. Comfortable conditions.'
					: 'High humidity. It might feel humid and uncomfortable.'}
		</p>
	</div>
</div>
