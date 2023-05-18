import type { AvailableIcons } from '$lib/components/IconButton';

export type Category = {
	id: string;
	name: string;
	icon: AvailableIcons;
	color: string;
};

export const baseCategories: Category[] = [
	{
		id: '0',
		name: 'Viagem',
		icon: 'Beach',
		color: '#3dab3d'
	},
	{
		id: '1',
		name: 'Casa',
		icon: 'Home',
		color: '#3dabab'
	},
	{
		id: '2',
		name: 'Comidas',
		icon: 'Cutlery',
		color: '#3d3d3d'
	},
	{
		id: '3',
		name: 'Transportes',
		icon: 'Car',
		color: '#ab3c3d'
	},
	{
		id: '4',
		name: 'Combustivel',
		icon: 'GasPump',
		color: '#9d9f9c'
	}
];

export type UpdateCategoryFunctionType = (newCategory: Category) => void;
