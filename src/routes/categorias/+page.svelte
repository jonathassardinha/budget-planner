<script lang="ts">
	import IconButton from '$lib/components/IconButton/IconButton.svelte';
	import { Tab, TabPanel, TabsContainer, TabsProvider } from '$lib/components/Tabs';
	import { writable } from 'svelte/store';
	import CategoryItem from './CategoryItem.svelte';
	import { baseCategories, type Category, type UpdateCategoryFunctionType } from './Categories.utils';

	const categories = writable(baseCategories);

	const updateCategory: UpdateCategoryFunctionType = (newCategory) => {
		const newCategories = $categories.map((category) => {
			if (category.id !== newCategory.id) return category;

			return newCategory;
		});

		categories.set(newCategories);
	};
</script>

<div class="flex flex-col items-center pt-10 h-full">
	<TabsProvider defaultTab="1">
		<TabsContainer>
			<Tab id="1" label="Entradas" />
			<Tab id="2" label="Saídas" />
		</TabsContainer>
		<TabPanel id="1">
			<div class="w-full pt-6 flex-1 relative">
				<div class="flex flex-col gap-2">
					{#each $categories as { id, color, icon, name }}
						<CategoryItem {id} {icon} {name} {color} {updateCategory} />
					{/each}
				</div>
				<IconButton class="!absolute !p-3 bottom-6 right-8 bg-lime-600" icon="Plus" iconProps={{ class: 'w-8 h-8' }} />
			</div>
		</TabPanel>
		<TabPanel id="2">
			<div class="w-full">panel 2</div>
		</TabPanel>
	</TabsProvider>
</div>
