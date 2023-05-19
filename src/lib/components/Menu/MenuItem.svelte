<script lang="ts">
	import { getContext } from 'svelte';
	import { MenuContextKey, type MenuContext } from './Menu.utils';
	import type { OnClickEvent } from '$lib/utils/types';

	const closeMenu = getContext<MenuContext>(MenuContextKey);

	export let onClick: ((event: OnClickEvent<HTMLButtonElement>) => void) | undefined = undefined;
	let className = '';
	export { className as class };

	const handleClick = (event: OnClickEvent<HTMLButtonElement>) => {
		closeMenu();
		if (onClick) {
			onClick(event);
		}
	};
</script>

<button on:click={handleClick} class={className}>
	<slot />
</button>
