import { IconMap, type AvailableIcons } from '$lib/components/IconButton';

const nonCategoryIcons: AvailableIcons[] = ['DotsHorizontal', 'Plus'];
export const availableIconNames = (Object.keys(IconMap) as AvailableIcons[]).filter(
	(iconName) => !nonCategoryIcons.includes(iconName)
);
export const iconColors = [
	'#0081A7',
	'#00AFB9',
	'#603744',
	'#DEB997',
	'#F07167',
	'#8F6D57',
	'#B8C645',
	'#FEA412',
	'#822939',
	'#3c3d3f',
	'#6c6d6f',
	'#9c9d9f'
];
