<script lang="ts">
	export let sunrise: string;
	export let sunset: string;
</script>

<div
	class="relative order-3 flex h-48 flex-col justify-between rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:p-6 lg:order-2"
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
						d="M18.4802 12.25C18.7602 12.25 19.0002 12.01 18.9802 11.73C18.7102 8.11 15.6902 5.25 12.0002 5.25C8.31019 5.25 5.29021 8.1 5.02021 11.73C5.00021 12.01 5.24021 12.25 5.52021 12.25H18.4802Z"
						fill="white"
					/>
					<path
						d="M22 13H21.92C21.37 13 20.92 12.55 20.92 12C20.92 11.45 21.37 11 21.92 11C22.47 11 22.96 11.45 22.96 12C22.96 12.55 22.55 13 22 13ZM2.08002 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11C2.55 11 3.03998 11.45 3.03998 12C3.03998 12.55 2.63002 13 2.08002 13ZM19.01 5.99001C18.75 5.99001 18.5 5.89 18.3 5.7C17.91 5.31 17.91 4.67999 18.3 4.28999L18.43 4.16C18.82 3.77 19.45 3.77 19.84 4.16C20.23 4.55 20.23 5.18001 19.84 5.57001L19.71 5.7C19.52 5.89 19.27 5.99001 19.01 5.99001ZM4.98999 5.99001C4.72999 5.99001 4.48003 5.89 4.28003 5.7L4.15002 5.57001C3.76002 5.18001 3.76002 4.55 4.15002 4.16C4.54002 3.77 5.17 3.77 5.56 4.16L5.69 4.28999C6.08 4.67999 6.08 5.31 5.69 5.7C5.5 5.89 5.23999 5.99001 4.98999 5.99001ZM12 3.03999C11.45 3.03999 11 2.63 11 2.08V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3.03999 12 3.03999Z"
						fill="white"
					/>
					<path
						opacity="0.4"
						d="M20 15.75H4C3.59 15.75 3.25 15.41 3.25 15C3.25 14.59 3.59 14.25 4 14.25H20C20.41 14.25 20.75 14.59 20.75 15C20.75 15.41 20.41 15.75 20 15.75Z"
						fill="white"
					/>
					<path
						opacity="0.4"
						d="M18 18.75H6C5.59 18.75 5.25 18.41 5.25 18C5.25 17.59 5.59 17.25 6 17.25H18C18.41 17.25 18.75 17.59 18.75 18C18.75 18.41 18.41 18.75 18 18.75Z"
						fill="white"
					/>
					<path
						opacity="0.4"
						d="M15 21.75H9C8.59 21.75 8.25 21.41 8.25 21C8.25 20.59 8.59 20.25 9 20.25H15C15.41 20.25 15.75 20.59 15.75 21C15.75 21.41 15.41 21.75 15 21.75Z"
						fill="white"
					/>
				</svg>
			</i>
			Sunset
		</div>
	</div>
	<div class="font-semibold md:text-lg">
		<p>{sunset}</p>
	</div>
	<div class="mt-auto flex items-center pt-0 text-xs md:text-sm">
		<p>Sunrise: {sunrise}</p>
	</div>
</div>
