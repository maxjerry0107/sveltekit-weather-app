<script lang="ts">
	import { convertToDate } from '$lib/dateUtils';
	import { convertWeatherIconMappings } from '$lib/iconMap';
	import TemperatureSlider from './TemperatureSlider.svelte';
	import WeatherIcon from './WeatherIcon.svelte';
	export let dayForecasts: {
		time: string[];
		weather_code: number[];
		temperature_2m_max: number[];
		temperature_2m_min: number[];
	};
	$: minTemperature = Math.min(...dayForecasts.temperature_2m_min);
	$: maxTemperature = Math.max(...dayForecasts.temperature_2m_max);
</script>

<div class="relative rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:p-6">
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
			{dayForecasts.time.length}-Day Forecast
		</div>
	</div>
	<div class="space-y-2 text-base font-normal md:mb-1 md:text-lg">
		{#each dayForecasts.weather_code as item, index}
			<div>
				<div class="flex w-full flex-row items-center justify-between gap-2 last:mb-0">
					<p class="min-w-[3rem] font-medium">
						{index === 0 ? 'Today' : convertToDate(dayForecasts.time[index], 'short')}
					</p>
					<WeatherIcon
						weatherCode={convertWeatherIconMappings[dayForecasts.weather_code[index]]}
						isDay={1}
						class=" h-8 w-8"
					/>
					<div class="flex w-[60%] flex-row gap-2 overflow-hidden">
						<div
							class="flex w-full select-none flex-row items-center justify-between gap-2 pr-2 text-sm"
						>
							<p class="flex w-[3rem] min-w-fit justify-end text-neutral-600 dark:text-neutral-400">
								{dayForecasts.temperature_2m_min[index]}&deg;
							</p>
							<TemperatureSlider
								min={minTemperature}
								max={maxTemperature}
								minValue={dayForecasts.temperature_2m_min[index]}
								maxValue={dayForecasts.temperature_2m_max[index]}
							/>
							<p class="flex w-[3rem] min-w-fit justify-end">
								{dayForecasts.temperature_2m_max[index]}&deg;
							</p>
						</div>
					</div>
				</div>
				{#if index !== dayForecasts.weather_code.length - 1}
					<div class="mt-3 h-[1px] w-full shrink-0 bg-border" />
				{/if}
			</div>
		{/each}
	</div>
</div>
