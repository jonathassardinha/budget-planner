import type { Writable } from "svelte/store"

export const TabsContextKey = Symbol()
export type TabsContextType = { currentActiveTab: Writable<string> }