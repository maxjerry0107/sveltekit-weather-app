<script lang="ts">
	export let uv: number;
	let progress: HTMLDivElement;
	$: if (progress) {
		progress.style.left = uv * 10 + '%';
	}
</script>

<div
	class="relative order-5 flex h-48 flex-col justify-between rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:p-6"
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
					class="h-4 w-4 stroke-black dark:stroke-white"
				>
					<path
						d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</i>
			UV Index
		</div>
	</div>
	<div class="font-semibold md:text-lg">
		<p class="mb-2">
			{Math.round(uv)}
			<br />
			{uv <= 2 ? 'Low' : uv <= 5 ? 'Moderate' : uv <= 7 ? 'High' : 'Very High'}
		</p>
		<div class="progress relative h-2.5 w-full overflow-hidden rounded-full bg-secondary">
			<div
				bind:this={progress}
				class="absolute h-2.5 w-2.5 flex-1 rounded-full bg-primary shadow-lg shadow-white ring-2 ring-white transition-all dark:ring-black"
			></div>
		</div>
	</div>
	<div class="mt-auto flex items-center pt-0 text-xs md:text-sm">
		<p>
			{uv <= 2 ? 'No protection needed.' : uv <= 5 ? 'Wear sunscreen.' : 'Take precautions.'}
		</p>
	</div>
</div>

<style>
	.progress {
		background: linear-gradient(
			90deg,
			rgba(58, 110, 180, 1) 0%,
			rgba(126, 212, 87, 1) 20%,
			rgba(248, 212, 73, 1) 40%,
			rgba(235, 77, 96, 1) 60%,
			rgba(180, 96, 231, 1) 80%,
			rgba(178, 34, 34, 1) 100%
		);
	}
</style>
