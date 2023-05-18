<script lang="ts">
	import { getContext } from 'svelte';
	import { TabsContextKey, type TabsContextType } from './Tabs.utils';

	export let id: string;
	export let label: string;

	const { currentActiveTab } = getContext<TabsContextType>(TabsContextKey);

	$: isTabActive = $currentActiveTab === id;
</script>

<button
	on:click={() => {
		$currentActiveTab = id;
	}}
	class="relative"
>
	<span
		class="text-xl transition-[color] duration-500 {isTabActive
			? 'text-gray-800'
			: 'text-gray-400'}">{label}</span
	>
	<div class="absolute flex justify-center w-full h-px -bottom-1">
		<div
			class="bg-lime-600 h-[2px] transition-all duration-500 linear rounded-lg"
			style="width: {isTabActive ? '90%' : '0px'};"
		/>
	</div>
</button>
