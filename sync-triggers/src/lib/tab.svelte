<script lang="ts">
	import { onMount } from 'svelte';
	import { TabsContext } from './tabs.svelte';

	export let tab: string;

	const { tabs, content } = TabsContext.get();

	onMount(() => {
		tabs.update((curr) => {
			return [...curr, tab];
		});

		return () => {
			tabs.update((curr) => {
				return [...curr].filter((t) => t !== tab);
			});
		};
	});
</script>

<div {...$content(tab)} use:content>
	<slot />
</div>
