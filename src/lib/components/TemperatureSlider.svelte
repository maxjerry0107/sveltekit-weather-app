<script lang="ts">
	export let min: number;
	export let max: number;

	export let minValue: number;
	export let maxValue: number;

	$: minTemp = minValue > min ? minValue : min;
	$: maxTemp = maxValue < max ? maxValue : max;
	$: leftPos = ((minTemp - min) * 100) / (max - min);
	$: rightPos = ((max - maxTemp) * 100) / (max - min);
	$: if (track) track.style.left = leftPos + '%';
	$: if (track) track.style.right = rightPos + '%';

	let track: HTMLDivElement;
</script>

<div class="relative flex w-full max-w-[17rem] touch-none select-none items-center md:max-w-[8rem]">
	<div class="relative h-1.5 w-full grow select-none overflow-hidden rounded-full bg-primary/20">
		<div
			bind:this={track}
			class="absolute h-full rounded-full bg-gradient-to-l from-green-300 to-blue-400"
		></div>
	</div>
</div>
