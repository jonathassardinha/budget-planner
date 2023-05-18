<script lang="ts">
	import { IconButton } from '$lib/components/IconButton';
	import { Tab, TabPanel, TabsContainer, TabsProvider } from '$lib/components/Tabs';
	import { DotsHorizontal, Shirt } from '$lib/icons';
</script>

<div class="flex flex-col items-center py-10">
	<TabsProvider defaultTab="1">
		<TabsContainer>
			<Tab id="1" label="Entradas" />
			<Tab id="2" label="Saídas" />
		</TabsContainer>
		<TabPanel id="1">
			<div class="w-full pt-6">
				<div class="px-10 py-2 flex justify-start gap-6 items-center">
					<IconButton icon="Shirt" class="bg-red-300" />
					<span>Alimentacao</span>
					<IconButton icon="DotsHorizontal" class="ml-auto" />
				</div>
			</div>
		</TabPanel>
		<TabPanel id="2">
			<div class="w-full">panel 2</div>
		</TabPanel>
	</TabsProvider>
</div>
