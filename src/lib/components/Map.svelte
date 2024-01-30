<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_MAPBOX_API_KEY } from '$env/static/public';
	import { WEATHER_TILES } from '$lib/constants';
	import type { MapTileDescriptionType } from '$lib/types';
	import { getMapboxStyleURL, getTileURL } from '$lib/utils';
	import mapboxgl from 'mapbox-gl';
	import { mode } from 'mode-watcher';
	import { onDestroy, onMount } from 'svelte';
	import { CheckSolid, ChevronDownSolid } from 'svelte-awesome-icons';
	import { createListbox } from 'svelte-headlessui';
	import Transition from 'svelte-transition';
	import '../../../node_modules/mapbox-gl/dist/mapbox-gl.css';
	import MapTileDescription from './MapTileDescription.svelte';

	let map: mapboxgl.Map;
	let mapContainer: HTMLDivElement;
	let selectedMapTile: MapTileDescriptionType = WEATHER_TILES[0];

	$: if (map) {
		const mapboxTheme = getMapboxTheme($mode);
		map.setStyle(getMapboxStyleURL(mapboxTheme));
	}

	$: if (map) {
		map.setCenter([$page.data.location.lon, $page.data.location.lat]);
	}

	const getMapboxTheme = (theme: string | undefined) => {
		let mapboxTheme = 'light';
		if (theme == undefined) {
			mapboxTheme =
				window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light';
		} else mapboxTheme = theme;
		return mapboxTheme;
	};

	const listbox = createListbox({ label: 'Weather Tiles', selected: WEATHER_TILES[0] });

	const onSelectWeatherTile = (e: Event) => {
		selectedMapTile = (e as CustomEvent).detail.selected;
		map.getSource('weather-source').setTiles([getTileURL(selectedMapTile.code)]);
	};

	onMount(() => {
		map = new mapboxgl.Map({
			attributionControl: false,
			container: mapContainer,
			accessToken: PUBLIC_MAPBOX_API_KEY,
			center: [$page.data.location.lon, $page.data.location.lat],
			zoom: 7,
			pitch: 60,
			bearing: -60
		});
		map.scrollZoom.disable();
		map.dragPan.disable();
		map.dragRotate.disable();

		map.on('style.load', () => {
			try {
				map.addSource('weather-source', {
					type: 'raster',
					tiles: [getTileURL(selectedMapTile.code)],
					tileSize: 256
				});
				map.addLayer({
					id: 'weather-layer',
					source: 'weather-source',
					type: 'raster',
					paint: {
						'raster-opacity': 0.4
					},
					minzoom: 0,
					maxzoom: 15
				});
			} catch (error) {
				console.log(error);
			}
		});
	});

	onDestroy(() => {
		if (map) map.remove();
	});
</script>

<div
	class="relative order-11 col-span-2 overflow-hidden overscroll-contain rounded-xl border bg-card p-0 text-card-foreground shadow-sm md:p-0 xl:col-span-3"
>
	<div class="absolute right-0 z-20 m-2">
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
					class="absolute right-0 z-50 mt-1 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-xs text-popover-foreground shadow-md"
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
	<div class="absolute bottom-0 right-0 z-10 w-1/2">
		<MapTileDescription {selectedMapTile} />
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
