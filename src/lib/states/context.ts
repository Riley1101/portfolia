import { getContext, setContext } from "svelte";
import type { App } from "./app.svelte.ts";

const KEY = "app";

export function setAppContext(app: App) {
	setContext(KEY, app);
}

export function getAppContext() {
	return getContext(KEY) as App;
}
