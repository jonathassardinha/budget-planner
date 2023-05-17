<script lang="ts">
	import { setContext } from 'svelte';
	import { TabsContextKey, type TabsContextType } from './Tabs.utils';
	import { writable } from 'svelte/store';

	const currentActiveTab = writable<string>();

	setContext<TabsContextType>(TabsContextKey, { currentActiveTab });
</script>

<slot />
