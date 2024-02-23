<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import { dialogRegistry, type DialogName } from ".";

  export let name: DialogName;

  const {elements: {portalled, title, content, description, close, overlay}} = dialogRegistry.get(name);
</script>

<div use:melt={$portalled}>
	<div use:melt={$overlay} class="fixed inset-0 z-50 bg-black/50" />
	<div
		class="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw]
            max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white
            p-6 shadow-lg"
		use:melt={$content}
	>
		<slot title={$title} description={$description} close={$close} />
	</div>
</div>
