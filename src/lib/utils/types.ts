export type OnClickEvent<T extends HTMLElement> = MouseEvent & {
	currentTarget: EventTarget & T;
};
