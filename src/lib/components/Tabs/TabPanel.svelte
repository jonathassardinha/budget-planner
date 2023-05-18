<script lang="ts">
	import { getContext } from 'svelte';
	import { TabsContextKey, type TabsContextType } from './Tabs.utils';

	export let id: string;

	const { currentActiveTab } = getContext<TabsContextType>(TabsContextKey);

	$: isTabActive = $currentActiveTab === id;
</script>

{#if isTabActive}
	<slot />
{/if}
