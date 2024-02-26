<script lang="ts">
	import { convertWeatherIconMappings } from '$lib/iconMap';
	import { dragscroll } from '@svelte-put/dragscroll';
	import WeatherIcon from './WeatherIcon.svelte';

	export let twoDayHourlyForecasts: {
		time: string[];
		temperature_2m: number[];
		weather_code: number[];
	};
	export let timeZone: string;
	let ref: HTMLDivElement;
	$: curIndex = 0;
	const hourToAmPm = (hours: number) => {
		var AmOrPm = hours % 24 >= 12 ? 'pm' : 'am';
		hours = hours % 12 || 12;
		return hours + AmOrPm;
	};
	$: twoDayHourlyForecasts && getCurrentIndex();

	const getCurrentIndex = () => {
		curIndex =
			Number.parseInt(
				new Date().toLocaleTimeString('en-US', {
					timeZone,
					hour12: false,
					hour: 'numeric'
				})
			) % 24;
		if (ref) ref.scroll(0, 0);
	};
</script>

<div
	class="order-first col-span-2 flex h-48 flex-col justify-between rounded-xl border bg-card p-6 text-card-foreground shadow-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:order-2 md:p-6 lg:order-3"
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
						d="M8 2V5"
						stroke="white"
						stroke-width="1.5"
						stroke-miterlimit="10"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M16 2V5"
						stroke="white"
						stroke-width="1.5"
						stroke-miterlimit="10"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M3.5 9.08984H20.5"
						stroke="white"
						stroke-width="1.5"
						stroke-miterlimit="10"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
						stroke="white"
						stroke-width="1.5"
						stroke-miterlimit="10"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M15.6947 13.7002H15.7037"
						stroke="white"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M15.6947 16.7002H15.7037"
						stroke="white"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M11.9955 13.7002H12.0045"
						stroke="white"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M11.9955 16.7002H12.0045"
						stroke="white"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M8.29431 13.7002H8.30329"
						stroke="white"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M8.29431 16.7002H8.30329"
						stroke="white"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</i>
			24-Hour Forecast
		</div>
	</div>
	<div
		bind:this={ref}
		use:dragscroll
		class="relative flex h-48 cursor-grab select-none flex-row items-center justify-between gap-8 overflow-hidden overscroll-contain"
	>
		{#each twoDayHourlyForecasts.time.slice(curIndex, curIndex + 24) as item, index}
			<div class="flex h-full flex-col justify-between" class:font-bold={0 === index}>
				<div class="flex justify-center text-sm text-neutral-600 dark:text-neutral-400">
					{hourToAmPm(index + curIndex)}
				</div>
				<div class="flex h-full items-center justify-center">
					<WeatherIcon
						weatherCode={convertWeatherIconMappings[
							twoDayHourlyForecasts.weather_code[index + curIndex]
						]}
						isDay={1}
						class="h-8 w-8"
					/>
				</div>
				<div class="flex justify-center">
					{Math.floor(twoDayHourlyForecasts.temperature_2m[index + curIndex])}&deg;
				</div>
			</div>
		{/each}
	</div>
</div>
