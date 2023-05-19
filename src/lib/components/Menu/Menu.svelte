<script lang="ts">
	import { writable } from 'svelte/store';
	import { openMenu, type MenuStyles, MenuContextKey, type MenuContext } from './Menu.utils';
	import { setContext } from 'svelte';
	import type { OnClickEvent } from '$lib/utils/types';

	const menuStyles = writable<MenuStyles>({
		top: 0,
		left: 0
	});

	export let anchorEl: HTMLElement | undefined;
	let paperClass = '';
	export { paperClass as class };
	let dialog: HTMLDialogElement | undefined;
	let menuPaper: HTMLDivElement | undefined;

	const handleOpen = () => openMenu({ anchorEl, dialog, menuPaper, menuStyles });
	export { handleOpen as openMenu };
	export const closeMenu = () => dialog?.close();

	const onMenuClick = (event: OnClickEvent<HTMLDialogElement>) => {
		const target = event.target as HTMLElement;
		if (target.nodeName === 'DIALOG') {
			dialog?.close();
		}
	};

	setContext<MenuContext>(MenuContextKey, closeMenu);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog bind:this={dialog} class="no-backdrop overflow-visible bg-transparent p-0 w-full h-full" on:click={onMenuClick}>
	<div
		bind:this={menuPaper}
		class="p-10 shadow-2xl z-10 bg-white rounded-lg fixed {paperClass}"
		style="top: {$menuStyles.top}px; left: {$menuStyles.left}px;"
	>
		<slot />
	</div>
</dialog>

<style>
	.no-backdrop::backdrop {
		background: none;
	}
</style>
