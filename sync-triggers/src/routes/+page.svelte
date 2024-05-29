<script lang="ts">
	import Tab from '$lib/tab.svelte';
	import Tabs from '$lib/tabs.svelte';
	import { lang } from '$lib/stores';
</script>

<Tabs bind:value={$lang}>
	<Tab tab="html">HTML</Tab>
	<Tab tab="css">CSS</Tab>
	<Tab tab="js">JS</Tab>
</Tabs>
<br />
<Tabs bind:value={$lang}>
	<Tab tab="html">HTML</Tab>
	<Tab tab="css">CSS</Tab>
	<Tab tab="js">JS</Tab>
</Tabs>
<br />
<Tabs>
	<Tab tab="tab-1">Tab 1</Tab>
	<Tab tab="tab-2">Tab 2</Tab>
	<Tab tab="tab-3">Tab 3</Tab>
</Tabs>
