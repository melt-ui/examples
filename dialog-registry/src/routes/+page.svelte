<script>

	import { Dialog } from "$lib/Dialog";
	import { melt } from "@melt-ui/svelte";

</script>

<hgroup>
	<h1 class="text-4xl font-semibold">Dialog Registry</h1>
	<h2 class="font-bold text-lg text-slate-300">Keep track of your dialogs. Use them anywhere.</h2>
	<h3 class="text-xs mt-1 text-slate-400">
		Built with <a class="underline hover:opacity-75" href="https://melt-ui.com">Melt UI</a>.
	</h3>
</hgroup>

<div class="grid grid-cols-3 mt-12 gap-4">
	<Dialog.Trigger name="settings" />
	<Dialog.Trigger name="settings">Settings again</Dialog.Trigger>
	<Dialog.Trigger name="login" />
	<Dialog.Trigger name="delete" />
</div>

<Dialog.Content name="settings" let:title let:description let:close>
	<h2 class="font-bold" use:melt={title}>Settings</h2>
	<p use:melt={description}>Placeholder description</p>

	<div class="flex">
		<button class="btn mt-4 ml-auto" use:melt={close}> Close </button>
	</div>
</Dialog.Content>

<Dialog.Content name="login" let:title let:description let:close>
	<h2 class="font-bold" use:melt={title}>Login</h2>
	<p use:melt={description}>Placeholder description</p>

	<div class="flex">
		<button class="btn mt-4 ml-auto" use:melt={close}> Close </button>
	</div>
</Dialog.Content>

<Dialog.Content name="delete" let:title let:description let:close>
	<h2 class="font-bold" use:melt={title}>Delete</h2>
	<p use:melt={description}>This one can't be closed with Esc!</p>

	<div class="flex">
		<button class="btn mt-4 ml-auto !bg-red-600" use:melt={close}> Delete </button>
	</div>
</Dialog.Content>
