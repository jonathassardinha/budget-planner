<script lang="ts">
	import { writable } from 'svelte/store';
	import type { DialogClickEvent } from './Menu.utils';

	export let anchorEl: HTMLElement | undefined;
	let paperClass = '';
	export { paperClass as class };
	let dialog: HTMLDialogElement | undefined;
	let menuPaper: HTMLDivElement | undefined;

	const menuStyles = writable({
		top: 0,
		left: 0
	});

	export const openMenu = () => {
		if (dialog && anchorEl && menuPaper) {
			dialog.showModal();
			const boundingRect = anchorEl.getBoundingClientRect();

			const menuRect = menuPaper.getBoundingClientRect();
			const maxLeft = window.innerWidth - menuRect.width - 16;
			const maxTop = window.innerHeight - menuRect.height - 16;
			menuStyles.set({
				top: Math.min(maxTop, boundingRect.bottom),
				left: Math.min(maxLeft, boundingRect.left)
			});
		}
	};

	export const closeMenu = () => dialog?.close();

	const onMenuClick = (event: DialogClickEvent) => {
		const target = event.target as HTMLElement;
		if (target.nodeName === 'DIALOG') {
			dialog?.close();
		}
	};
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
