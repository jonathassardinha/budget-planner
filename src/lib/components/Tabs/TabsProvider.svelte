<script lang="ts">
	import { setContext } from 'svelte';
	import { TabsContextKey, type TabsContextType } from './Tabs.utils';
	import { writable } from 'svelte/store';

	export let defaultTab: string;

	const currentActiveTab = writable<string>(defaultTab);

	setContext<TabsContextType>(TabsContextKey, { currentActiveTab });
</script>

<slot />
