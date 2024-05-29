<script context="module" lang="ts">
	type TabsContext = {
		tabs: Writable<string[]>;
		content: TabsElements['content'];
	};

	const CTX_SYMBOL = Symbol('tabs');
	export const TabsContext = {
		get() {
			return getContext<TabsContext>(CTX_SYMBOL);
		},
		set(value: TabsContext) {
			return setContext(CTX_SYMBOL, value);
		}
	};
</script>

<script lang="ts">
	import { createSync, createTabs, type TabsElements } from '@melt-ui/svelte';
	import { getContext, setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	export let value: string | undefined = undefined

	const {
		elements: { root, list, content, trigger },
		states
	} = createTabs();

	const sync = createSync(states);
	$: value && sync.value(value, (v) => (value = v));

	const tabs = writable<string[]>([]);
	TabsContext.set({ tabs, content });
</script>

<div {...$root} use:root>
	<div {...$list} use:list>
		{#each $tabs as tab}
			<button {...$trigger(tab)} use:trigger>{tab}</button>
		{/each}
	</div>
	<slot />
</div>
