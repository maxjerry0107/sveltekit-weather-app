<script lang="ts">
	import AirPollution from '$lib/components/AirPollution.svelte';
	import CurrentWeather from '$lib/components/CurrentWeather.svelte';
	import FeelsLike from '$lib/components/FeelsLike.svelte';
	import HourlyForecast from '$lib/components/HourlyForecast.svelte';
	import Humidity from '$lib/components/Humidity.svelte';
	import Map from '$lib/components/Map.svelte';
	import OtherLargeCities from '$lib/components/OtherLargeCities.svelte';
	import Precipitation from '$lib/components/Precipitation.svelte';
	import Pressure from '$lib/components/Pressure.svelte';
	import SunWidget from '$lib/components/SunWidget.svelte';
	import TenDayForecasts from '$lib/components/TenDayForecasts.svelte';
	import UvIndex from '$lib/components/UVIndex.svelte';
	import Visibility from '$lib/components/Visibility.svelte';
	import Wind from '$lib/components/Wind.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	$: location = data.location;
	$: weather = data.current;
	$: forecasts = data.forecast.forecastday;
</script>

<div class="flex flex-col gap-4 md:flex-row">
	<div class="flex w-full min-w-[18rem] flex-col gap-4 md:w-1/3">
		<CurrentWeather {weather} {location} forecast={forecasts[0]} />
		<TenDayForecasts {forecasts} />
	</div>
	<section class="grid h-full w-full grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
		<AirPollution {weather} />
		<SunWidget sunrise={forecasts[0].astro.sunrise} sunset={forecasts[0].astro.sunset} />
		<Wind deg={weather.wind_degree} speed={weather.wind_kph} />
		<UvIndex uv={weather.uv} />
		<Precipitation precipitation={weather.precip_mm} />
		<FeelsLike feels_like={weather.feelslike_c} temperature={weather.temp_c} />
		<Humidity humidity={weather.humidity} />
		<Visibility visibility={weather.vis_km} />
		<Pressure pressure={weather.pressure_mb} />
		<HourlyForecast hourlyData={forecasts[0].hour} />
		<Map />
		<OtherLargeCities />
	</section>
</div>
