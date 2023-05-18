<script lang="ts">
	import { writable } from 'svelte/store';
	import { tweened } from 'svelte/motion';
	import { quadInOut } from 'svelte/easing';
	import {
		IconMap,
		type AvailableIcons,
		type IconButtonOnClickHandler,
		setRippleData,
		type RippleData
	} from './IconButton.utils';

	let className = '';
	export let icon: AvailableIcons;
	export { className as class };
	export let style = '';
	export let onClick: IconButtonOnClickHandler | undefined = undefined;
	export let iconProps: { class?: string; color?: string } = {};

	let rippleElement: HTMLSpanElement | undefined;
	const rippleData = writable<RippleData>({ width: '', left: '', top: '' });
	const animatedRippleData = tweened({ scale: 0, opacity: 0 }, { duration: 600, easing: quadInOut });

	$: Icon = IconMap[icon];

	const handleClick: IconButtonOnClickHandler = (event) => {
		if (rippleElement) {
			setRippleData(rippleData, event);
			animatedRippleData.set({ scale: 0, opacity: 1 }, { duration: 0 });
			animatedRippleData.set({ scale: 4, opacity: 0 });
		}
		if (onClick) {
			onClick(event);
		}
	};
</script>

<button class="rippleWrapper p-2 rounded-full relative overflow-hidden {className}" on:click={handleClick} {style}>
	<svelte:component this={Icon} {...iconProps} />
	<span
		class="absolute bg-[rgba(255,255,255,0.7)] rounded-[50%]"
		style="
			width: {$rippleData.width};
			height: {$rippleData.width};
			left: {$rippleData.left};
			top: {$rippleData.top};
			scale: {$animatedRippleData.scale};
			opacity: {$animatedRippleData.opacity};
		"
		bind:this={rippleElement}
	/>
</button>
