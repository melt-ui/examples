<script lang="ts">
	import { createSync, melt } from '@melt-ui/svelte';
	import { dialogRegistry, type DialogName } from '.';
	import { page } from '$app/stores';

	export let name: DialogName;

	const {
		elements: { portalled, title, content, description, close, overlay },
		states: { open }
	} = dialogRegistry.get(name);

	const sync = createSync({ open });
	$: sync.open($page.state.dialogOpen === name, ($open) => {
		if ($page.state.dialogOpen !== name) {
			dialogRegistry.shallow(name, $open);
		}
	});
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
