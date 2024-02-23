<script lang="ts">
	import '../app.pcss';
</script>

<main class="bg-slate-900 text-white min-h-screen">
	<div class="container mx-auto py-4">
		<slot />
	</div>
</main>

<style lang="postcss">
	:global(.btn) {
		@apply inline-flex items-center justify-center rounded-xl bg-white px-4 py-3
  	font-medium leading-none text-slate-700 shadow hover:opacity-75;
	}

	:global([data-melt-dialog-content] .btn) {
		@apply !shadow-none bg-slate-900 text-white;
	}
</style>
