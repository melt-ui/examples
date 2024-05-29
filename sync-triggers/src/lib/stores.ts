import { writable } from "svelte/store";

export const lang = writable<'html' | 'css' | 'js'>('js');
