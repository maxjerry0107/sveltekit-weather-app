<script lang="ts">
	export let visibility: number;
</script>

<div
	class="relative order-9 flex h-48 flex-col justify-between rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:p-6"
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
						opacity="0.4"
						d="M21.25 9.15018C18.94 5.52017 15.56 3.43018 12 3.43018C10.22 3.43018 8.49 3.95018 6.91 4.92018C5.33 5.90018 3.91 7.33017 2.75 9.15018C1.75 10.7202 1.75 13.2702 2.75 14.8402C5.06 18.4802 8.44 20.5602 12 20.5602C13.78 20.5602 15.51 20.0402 17.09 19.0702C18.67 18.0902 20.09 16.6602 21.25 14.8402C22.25 13.2802 22.25 10.7202 21.25 9.15018ZM12 16.0402C9.76 16.0402 7.96 14.2302 7.96 12.0002C7.96 9.77018 9.76 7.96018 12 7.96018C14.24 7.96018 16.04 9.77018 16.04 12.0002C16.04 14.2302 14.24 16.0402 12 16.0402Z"
						fill="white"
					/>
					<path
						d="M11.9999 9.14014C10.4299 9.14014 9.1499 10.4201 9.1499 12.0001C9.1499 13.5701 10.4299 14.8501 11.9999 14.8501C13.5699 14.8501 14.8599 13.5701 14.8599 12.0001C14.8599 10.4301 13.5699 9.14014 11.9999 9.14014Z"
						fill="white"
					/>
				</svg>
			</i>
			Visibility
		</div>
	</div>
	<div class="font-semibold md:text-lg">
		<p>{visibility} km</p>
	</div>
	<div class="mt-auto flex items-center pt-0 text-xs md:text-sm">
		<p>
			{visibility >= 10
				? "It's perfectly clear right now."
				: visibility >= 5
					? 'Good visibility.'
					: 'Poor visibility. Exercise caution while driving or moving around.'}
		</p>
	</div>
</div>
