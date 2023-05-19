import type { Writable } from 'svelte/store';

export type MenuStyles = {
	top: number;
	left: number;
};

export type openMenuParams = {
	dialog: HTMLDialogElement | undefined;
	anchorEl: HTMLElement | undefined;
	menuPaper: HTMLElement | undefined;
	menuStyles: Writable<MenuStyles>;
};

export const openMenu = ({ dialog, anchorEl, menuPaper, menuStyles }: openMenuParams) => {
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

export const MenuContextKey = Symbol();
export type MenuContext = () => void;
