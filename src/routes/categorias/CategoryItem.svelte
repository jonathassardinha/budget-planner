<script lang="ts">
	import { IconButton, type AvailableIcons, IconMap } from '$lib/components/IconButton';
	import { Menu, MenuItem } from '$lib/components/Menu';
	import type { UpdateCategoryFunctionType } from './Categories.utils';
	import { availableIconNames, iconColors } from './CategoryItem.utils';

	export let id: string;
	export let name: string;
	export let icon: AvailableIcons;
	export let color: string;
	export let updateCategory: UpdateCategoryFunctionType;

	let dialog: HTMLDialogElement | undefined;
	let iconButtonEl: HTMLButtonElement | undefined;

	const openModal = () => {
		dialog?.showModal();
	};

	const setNewIcon = (newIcon: AvailableIcons) => {
		updateCategory({ id, icon: newIcon, color, name });
	};

	const setNewColor = (newColor: string) => {
		updateCategory({ id, icon, color: newColor, name });
	};

	let openMenu: () => void;
</script>

<div class="px-10 py-2 flex justify-start gap-6 items-center relative">
	<IconButton {icon} onClick={openModal} class="bg-red-300" style={color ? `background-color: ${color}` : ''} />
	<span>{name}</span>
	<div class="ml-auto">
		<IconButton icon="DotsHorizontal" onClick={openMenu} bind:ref={iconButtonEl} />
		<Menu anchorEl={iconButtonEl} bind:openMenu class="flex flex-col !p-4 gap-2">
			<MenuItem onClick={() => openModal()}>Edit</MenuItem>
			<MenuItem class="text-red-700">Remove</MenuItem>
		</Menu>
	</div>

	<dialog bind:this={dialog} class="dialog rounded-md px-8 py-6">
		<span class="text-lg mb-4 block font-bold">Icon</span>
		<div class="flex gap-2 flex-wrap">
			{#each availableIconNames as iconName}
				<IconButton
					onClick={() => setNewIcon(iconName)}
					icon={iconName}
					style={color ? `background-color: ${color}` : ''}
				/>
			{/each}
		</div>
		<span class="text-lg mt-6 mb-4 block font-bold">Color</span>
		<div class="flex gap-2 flex-wrap">
			{#each iconColors as newColor}
				<IconButton onClick={() => setNewColor(newColor)} {icon} style="background-color: {newColor};" />
			{/each}
		</div>
		<button class="mt-8 px-4 py-2 bg-cyan-600 rounded-lg text-white" on:click={() => dialog?.close()}>Close</button>
	</dialog>
</div>

<style lang="scss">
	.dialog::backdrop {
		background-color: #000;
		opacity: 0.6;
	}
</style>
