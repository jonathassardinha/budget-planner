import type { PageLoad } from './$types';
import { baseCategories } from './Categories.utils';

export const load: PageLoad = async () => {
	return { baseCategories };
};
