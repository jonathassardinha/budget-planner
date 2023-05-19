import { writable } from 'svelte/store';

export type completeFetchParams = {
	url: URL | string;
	method: string;
};

export type useFetchParams = {
	body?: BodyInit | null;
};

export type useFetch = (params?: useFetchParams) => Response | unknown;

export function completeFetch({ url, method }: completeFetchParams) {
	const isLoading = writable(false);
	const isError = writable(false);
	const error = writable();
	const data = writable();

	const useFetch: useFetch = async ({ body } = {}) => {
		isLoading.set(true);
		isError.set(false);
		try {
			const response = await fetch(url, { method, body });
			data.set(await response.json());
			return response;
		} catch (responseError) {
			isError.set(true);
			error.set(responseError);
			return responseError;
		} finally {
			isLoading.set(false);
		}
	};

	return [useFetch, { isLoading, isError, data, error }] as const;
}
