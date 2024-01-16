<script lang="ts">
	import AirPollution from '$lib/components/AirPollution.svelte';
	import CurrentWeather from '$lib/components/CurrentWeather.svelte';
	import TenDayForecasts from '$lib/components/TenDayForecasts.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	$: location = data.location;
	$: weather = data.current;
	$: forecasts = data.forecast.forecastday;
	$: console.log(data);
</script>

<h1>{location.name}</h1>

<div class="flex flex-col gap-4 md:flex-row">
	<div class="flex w-full min-w-[18rem] flex-col gap-4 md:w-1/2">
		<CurrentWeather {weather} {location} forecast={forecasts[0]} />
		<TenDayForecasts {forecasts} />
	</div>
	<section class="grid h-full grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
		<AirPollution {weather} />
	</section>
</div>
