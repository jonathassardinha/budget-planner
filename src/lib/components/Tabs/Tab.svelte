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
>
	<span class={isTabActive ? 'text-red-500' : ''}>{label}</span>
</button>
