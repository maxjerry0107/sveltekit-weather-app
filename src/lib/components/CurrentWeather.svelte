<script lang="ts">
	import { convertToDate } from '$lib/dateUtils';
	import type { Current, DayForecast, Location } from '$lib/types';
	import Clock from './Clock.svelte';
	import WeatherIcon from './WeatherIcon.svelte';

	export let weather: Current;
	export let location: Location;
	export let forecast: DayForecast;
</script>

<div
	class="relative flex h-fit w-full shrink-0 flex-col justify-between overflow-hidden rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:h-[25rem] md:p-6"
>
	<div class="absolute" />
	<div>
		<div class="flex justify-between text-lg font-semibold">
			<span>{convertToDate(location.localtime, 'long')}</span>
			<Clock timeZone={location.tz_id} />
		</div>
		<div class="text-md mt-2 flex font-bold">
			<span>{location.name}</span>
			<i>
				<svg
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					class="ml-0.5 h-4 w-4 fill-none stroke-black dark:stroke-white"
				>
					<path
						d="M7.39993 6.32003L15.8899 3.49003C19.6999 2.22003 21.7699 4.30003 20.5099 8.11003L17.6799 16.6C15.7799 22.31 12.6599 22.31 10.7599 16.6L9.91993 14.08L7.39993 13.24C1.68993 11.34 1.68993 8.23003 7.39993 6.32003Z"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M10.1101 13.6501L13.6901 10.0601"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</i>
		</div>
	</div>
	<div class="flex justify-center py-7 text-8xl font-bold md:py-10">
		{Math.round(weather.temp_c)}&deg;
	</div>
	<div>
		<WeatherIcon weatherCode={weather.condition.code} isDay={weather.is_day} class="h-9 w-9" />
		<div class="font-semibold">{weather.condition.text}</div>

		<div class="flex gap-2 dark:text-neutral-500">
			<span>H: {Math.round(forecast.day.maxtemp_c)}&deg;</span>
			<span>L: {Math.round(forecast.day.mintemp_c)}&deg;</span>
		</div>
	</div>
</div>
