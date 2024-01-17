<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_MAPBOX_API_KEY, PUBLIC_OPEN_WEATHER_MAP_API_KEY } from '$env/static/public';
	import { WEATHER_TILES } from '$lib/constants';
	import mapboxgl from 'mapbox-gl';
	import { onDestroy, onMount } from 'svelte';
	import { CheckSolid, ChevronDownSolid } from 'svelte-awesome-icons';
	import { createListbox } from 'svelte-headlessui';
	import themeStore from 'svelte-themes/themeStore';
	import Transition from 'svelte-transition';
	import '../../../node_modules/mapbox-gl/dist/mapbox-gl.css';
	let map: mapboxgl.Map;
	let mapContainer: HTMLDivElement;

	$: if (map) {
		const mapboxTheme = getMapboxTheme($themeStore.theme);
		map.setStyle(`mapbox://styles/mapbox/${mapboxTheme}-v11`);
	}

	$: if (map) {
		map.setCenter([$page.data.location.lon, $page.data.location.lat]);
		map.on('style.load', () => {
			try {
				map.addSource('weather-source', {
					type: 'raster',
					tiles: [
						`https://tile.openweathermap.org/map/${WEATHER_TILES[0].code}/{z}/{x}/{y}.png?appid=${PUBLIC_OPEN_WEATHER_MAP_API_KEY}`
					],
					tileSize: 256
				});
				map.addLayer({
					id: 'weather-layer',
					source: 'weather-source',
					type: 'raster',
					minzoom: 0,
					maxzoom: 15
				});
			} catch (error) {}
		});
	}

	const getMapboxTheme = (theme: string | undefined) => {
		let mapboxTheme = 'light';
		if (theme == 'system' || theme == undefined) {
			mapboxTheme =
				window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light';
		} else mapboxTheme = theme;
		return mapboxTheme;
	};

	onMount(() => {
		const initialState = { lng: $page.data.location.lon, lat: $page.data.location.lat };
		map = new mapboxgl.Map({
			attributionControl: false,
			container: mapContainer,
			accessToken: PUBLIC_MAPBOX_API_KEY,
			center: [initialState.lng, initialState.lat],
			zoom: 7,
			pitch: 60,
			bearing: -60
		});
		map.scrollZoom.disable();
		map.dragPan.disable();
		map.dragRotate.disable();
	});

	onDestroy(() => {
		if (map) map.remove();
	});

	const listbox = createListbox({ label: 'Weather Tiles', selected: WEATHER_TILES[0] });

	const onSelectWeatherTile = (e: Event) => {
		const weatherTile = (e as CustomEvent).detail.selected;

		map
			.getSource('weather-source')
			.setTiles([
				`https://tile.openweathermap.org/map/${weatherTile.code}/{z}/{x}/{y}.png?appid=${PUBLIC_OPEN_WEATHER_MAP_API_KEY}`
			]);
	};
</script>

<div
	class="relative order-11 col-span-2 h-[25rem] overflow-hidden overscroll-contain rounded-xl border bg-card p-0 text-card-foreground shadow-sm md:p-0 xl:col-span-3"
>
	<div class="absolute right-0 z-10 m-2">
		<div class="relative">
			<button
				use:listbox.button
				on:select={onSelectWeatherTile}
				class="relative flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 pr-10 text-left text-xs shadow-md ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
			>
				<span class="block truncate">{$listbox.selected.label}</span>
				<span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
					<ChevronDownSolid class="h-3 w-3 text-gray-400" />
				</span>
			</button>

			<Transition
				show={$listbox.expanded}
				leave="transition ease-in duration-100"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<ul
					use:listbox.items
					class="absolute right-0 z-50 mt-1 max-h-60 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-xs text-popover-foreground shadow-md"
				>
					{#each WEATHER_TILES as value, i}
						{@const active = $listbox.active === value}
						{@const selected = $listbox.selected === value}
						<li
							class="relative cursor-pointer select-none rounded-sm py-2 pl-10 pr-4 outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground {active &&
								'bg-accent text-accent-foreground'}"
							use:listbox.item={{ value }}
						>
							<span class="block truncate {selected ? 'font-medium' : 'font-normal'}"
								>{value.label}</span
							>
							{#if selected}
								<span
									class="absolute inset-y-0 left-0 flex items-center pl-3 text-accent-foreground"
								>
									<CheckSolid class="h-3 w-3" />
								</span>
							{/if}
						</li>
					{/each}
				</ul>
			</Transition>
		</div>
	</div>

	<div class="map" bind:this={mapContainer} />
</div>

<style>
	.map {
		position: absolute;
		width: 100%;
		height: 100%;
	}
</style>
