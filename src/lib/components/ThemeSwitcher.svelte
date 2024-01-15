<script lang="ts">
	import { buttonClass, buttonSizes, buttonVariants } from '$lib/constants';
	import { cn } from '$lib/utils';
	import type { ShortcutEventDetail } from '@svelte-put/shortcut';
	import { shortcut } from '@svelte-put/shortcut';
	import { MoonRegular, SunSolid } from 'svelte-awesome-icons';
	import { createMenu } from 'svelte-headlessui';
	import themeStore, { setTheme } from 'svelte-themes/themeStore';
	import Transition from 'svelte-transition';

	const menu = createMenu({ label: 'Theme' });
	const onSelectTheme = (e: Event) => {
		setTheme((e as CustomEvent).detail.selected.toLowerCase());
	};
	const onToggleTheme = (event: ShortcutEventDetail) => {
		const keyboardEvent = event.originalEvent;
		if ((keyboardEvent.target as HTMLElement)?.tagName === 'INPUT') {
			return;
		}
		setTheme($themeStore.theme == 'light' ? 'dark' : 'light');
	};
</script>

<svelte:window
	use:shortcut={{
		trigger: {
			key: 't',
			callback: onToggleTheme
		}
	}}
/>

<div>
	<button
		class={cn(buttonClass, buttonVariants.outline, buttonSizes.icon, 'h-9 shrink-0')}
		use:menu.button
		on:select={onSelectTheme}
	>
		<SunSolid
			class="w-h-4 h-4 rotate-0 scale-100 transition-all focus:outline-0 dark:-rotate-90 dark:scale-0"
		/>
		<MoonRegular
			class="w-h-4 absolute h-4 rotate-90 scale-0 transition-all focus:outline-0 dark:rotate-0 dark:scale-100"
		/>
		<span class="sr-only">Toggle theme</span>
	</button>

	<Transition
		show={$menu.expanded}
		enter="transition ease-out duration-100"
		enterFrom="transform opacity-0 scale-95"
		enterTo="transform opacity-100 scale-100"
		leave="transition ease-in duration-75"
		leaveFrom="transform opacity-100 scale-100"
		leaveTo="transform opacity-0 scale-95"
	>
		<div use:menu.items class="theme-switcher-container">
			<button use:menu.item class="theme-switcher-item">Light </button>
			<button use:menu.item class="theme-switcher-item">Dark </button>
			<button use:menu.item class="theme-switcher-item">System </button>
		</div>
	</Transition>
</div>

<style lang="postcss">
	.theme-switcher-container {
		@apply absolute mt-1 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md;
	}

	.theme-switcher-item {
		@apply relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground;
	}
</style>
