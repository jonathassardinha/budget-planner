import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import { vitePreprocess } from "@sveltejs/kit/vite";
import adapter from "@sveltejs/adapter-auto";
import type { Config as SvelteKitConfig } from "@sveltejs/kit";

const config: SvelteKitConfig = {
	kit: {
		adapter: adapter(),
	},
	preprocess: vitePreprocess(),
};

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"],
	},
});
