<script lang="ts">
	import { weatherIconMappings } from '$lib/iconMap';
	export let weatherCode: number;
	export let isDay: number;
	let className: string = '';
	export { className as class };
	$: iconNameKey = isDay == 1 ? `${weatherCode}d` : `${weatherCode}n`;
	$: iconName = weatherIconMappings[iconNameKey];
</script>

<div class={`relative invert-0 dark:invert ${className}`}>
	<img alt={iconNameKey} src={`/icons/wi-${iconName}.svg`} class="select-none" />
</div>
