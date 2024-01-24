<script lang="ts">
	import { WEATHER_TILES } from '$lib/constants';
	import type { MapTileDescriptionType } from '$lib/types';

	export let selectedMapTile: MapTileDescriptionType = WEATHER_TILES[0];
</script>

<div
	class="w-full gap-y-2 rounded-md bg-white/30 px-3 py-2 backdrop-blur-sm"
	class:columns-2={selectedMapTile?.data.length > 1}
	class:columns-1={selectedMapTile?.data.length == 1}
>
	{#each selectedMapTile?.data as item}
		<div class="flex w-full flex-col gap-y-0.5 px-0.5 text-[10px]">
			<div class="flex w-full flex-row items-center justify-between">
				<p>{item.label}</p>
				<p>{`Unit: ${selectedMapTile.unit}`}</p>
			</div>
			<img src={`weather-map/${item.imagePath}.png`} alt={item.label} class="h-2 w-full" />
			<div class="flex w-full flex-row items-center justify-between">
				{#each item.values as value}
					<span>{@html value}</span>
				{/each}
			</div>
		</div>
	{/each}
</div>
