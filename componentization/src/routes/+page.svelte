<script lang="ts">
	import Select from '$lib/Select.svelte';

	const selectOptions = {
		sweet: [
			{ value: 'Caramel', label: 'Caramel' },
			{ value: 'Chocolate', label: 'Chocolate' },
			{ value: 'Strawberry', label: 'Strawberry' },
			{ value: 'Cookies & Cream', label: 'Cookies & Cream' }
		],
		savory: [
			{ value: 'Basil', label: 'Basil' },
			{ value: 'Bacon', label: 'Bacon' },
			{ value: 'Rosemary', label: 'Rosemary' }
		]
	};
	let selectValue = 'Chocolate';
</script>

<hgroup>
	<h1 class="text-4xl font-semibold">Melty components</h1>
	<h2 class="font-bold text-lg text-slate-300">
		Examples of accessible components, built with Melt UI
	</h2>
	<h3 class="text-sm mt-1 text-slate-400">
		Source code <a class="underline hover:opacity-75" href="https://github.com/melt-ui/examples"
			>here</a
		>.
	</h3>
</hgroup>

<div class="flex flex-wrap mbs-16 gap-16">
	<div
		class="grid place-items-center rounded-xl w-40rem h-30rem bg-gradient-to-br from-magnum-400 to-magnum-700"
	>
		<div class="flex flex-col gap-4 items-center">
			<Select options={selectOptions} bind:value={selectValue} />
			<button
				class="bg-white text-neutral-900 p-2 py-1 rounded-lg hover:opacity-75 active:opacity-50"
				on:click={() => (selectValue = 'Basil')}
			>
				Set to basil
			</button>
		</div>
	</div>
</div>
