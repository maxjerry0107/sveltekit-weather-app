<script lang="ts">
	export let precipitation: number;
</script>

<div
	class="relative order-6 flex h-48 flex-col justify-between rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:p-6"
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
					class="h-4 w-4 invert dark:invert-0"
				>
					<path
						d="M16.6102 19.9999C17.9502 20.0099 19.2402 19.5099 20.2302 18.6099C23.5002 15.7499 21.7502 10.0099 17.4402 9.46995C15.9002 0.129949 2.43022 3.66995 5.62022 12.5599"
						stroke="white"
						stroke-width="1.5"
						stroke-miterlimit="10"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M7.27986 12.9698C6.74986 12.6998 6.15986 12.5598 5.56986 12.5698C0.909864 12.8998 0.919864 19.6798 5.56986 20.0098"
						stroke="white"
						stroke-width="1.5"
						stroke-miterlimit="10"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M15.8198 9.88998C16.3398 9.62998 16.8998 9.48998 17.4798 9.47998"
						stroke="white"
						stroke-width="1.5"
						stroke-miterlimit="10"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						opacity="0.4"
						d="M9.97022 20L7.97021 22"
						stroke="white"
						stroke-width="1.5"
						stroke-miterlimit="10"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						opacity="0.4"
						d="M13.9702 20L11.9702 22"
						stroke="white"
						stroke-width="1.5"
						stroke-miterlimit="10"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						opacity="0.4"
						d="M13.9702 16L11.9702 18"
						stroke="white"
						stroke-width="1.5"
						stroke-miterlimit="10"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						opacity="0.4"
						d="M9.97022 16L7.97021 18"
						stroke="white"
						stroke-width="1.5"
						stroke-miterlimit="10"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</i>
			Precipitation
		</div>
	</div>
	<div class="font-semibold md:text-lg">
		<p>
			{precipitation || 0}mm <br />in the last 3h
		</p>
	</div>
	<div class="mt-auto flex items-center pt-0 text-xs md:text-sm">
		<p>
			{precipitation != 0
				? precipitation <= 0.2
					? 'Light rain or drizzle. An umbrella may come in handy.'
					: precipitation <= 2.5
						? 'Moderate rain.'
						: 'Heavy rain.'
				: 'Conditions are dry.'}
		</p>
	</div>
</div>
