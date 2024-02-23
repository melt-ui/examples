<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import { dialogRegistry, type DialogName } from ".";
	import { capitalize } from "$lib/helpers/capitalize";

  export let name: DialogName;

  const {elements: {trigger}} = dialogRegistry.get(name);

</script>

<button class="btn" use:melt={$trigger}>
	<slot>
		Open {capitalize(name)} Dialog
	</slot>
</button>
