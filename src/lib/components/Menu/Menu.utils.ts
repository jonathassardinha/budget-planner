export type DialogClickEvent = MouseEvent & {
	currentTarget: EventTarget & HTMLDialogElement;
};
