import {
	Church,
	Beach,
	Car,
	Coins,
	Cutlery,
	DotsHorizontal,
	EletricDrill,
	GasPump,
	Government,
	GymWeights,
	Heart,
	Home,
	OpenBook,
	Shirt
} from '$lib/icons';
import type { Writable } from 'svelte/store';

export const IconMap = {
	Church: Church,
	Beach: Beach,
	Car: Car,
	Coins: Coins,
	Cutlery: Cutlery,
	DotsHorizontal: DotsHorizontal,
	EletricDrill: EletricDrill,
	GasPump: GasPump,
	Government: Government,
	GymWeights: GymWeights,
	Heart: Heart,
	Home: Home,
	OpenBook: OpenBook,
	Shirt: Shirt
} as const;

export type AvailableIcons = keyof typeof IconMap;

export type IconButtonOnClickEvent = MouseEvent & {
	currentTarget: EventTarget & HTMLButtonElement;
};
export type IconButtonOnClickHandler = (event: IconButtonOnClickEvent) => void;
export type RippleData = {
	width: string;
	left: string;
	top: string;
};

export function setRippleData(rippleData: Writable<RippleData>, event: IconButtonOnClickEvent) {
	const button = event.currentTarget;

	const diameter = Math.max(button.clientWidth, button.clientHeight);
	const radius = diameter / 2;

	const newRippleData: RippleData = {
		width: `${diameter}px`,
		left: `${event.clientX - button.offsetLeft - radius}px`,
		top: `${event.clientY - button.offsetTop - radius}px`
	};

	rippleData.set(newRippleData);
}
