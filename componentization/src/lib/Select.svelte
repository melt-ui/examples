<script lang="ts">
	import { createSelect, createSync, melt, type SelectOption } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';

	export let options: Record<string, SelectOption<string>[]>;
	export let value: string | undefined = undefined;

	const {
		elements: { trigger, menu, option, group, groupLabel, label },
		states: { selectedLabel, open, selected },
		helpers: { isSelected }
	} = createSelect<string>({
		forceVisible: true,
		positioning: {
			placement: 'bottom',
			fitViewport: true,
			sameWidth: true
		}
	});

	$: flatOptions = Object.values(options).flat();

	const sync = createSync({ selected });
	$: sync.selected(
		flatOptions.find((o) => o.value === value) || undefined, // Selected will be set to this
		(o) => o?.value // value will be set to this
	);
</script>

<div class="flex flex-col gap-1">
	<!-- svelte-ignore a11y-label-has-associated-control - $label contains the 'for' attribute -->
	<label class="block text-white text-lg font-500" use:melt={$label}>Favorite Flavor</label>
	<button
		class="flex h-10 min-w-[220px] items-center justify-between rounded-lg bg-white px-3 py-2
  text-magnum-700 shadow transition-opacity hover:opacity-90"
		use:melt={$trigger}
		aria-label="Food"
	>
		{$selectedLabel || 'Select a flavor'}
	</button>
	{#if $open}
		<div
			class=" z-10 flex max-h-[300px] flex-col
    overflow-y-auto rounded-lg bg-white p-1
    shadow focus:!ring-0"
			use:melt={$menu}
			transition:fade={{ duration: 150 }}
		>
			{#each Object.entries(options) as [key, arr]}
				<div use:melt={$group(key)}>
					<div
						class="py-1 pl-4 pr-4 font-semibold capitalize text-neutral-800"
						use:melt={$groupLabel(key)}
					>
						{key}
					</div>
					{#each arr as item}
						<div
							class="relative cursor-pointer rounded-lg py-1 pl-8 pr-4 text-neutral-800
              hover:bg-magnum-100 focus:z-10
              focus:text-magnum-700
              data-[highlighted]:bg-magnum-200 data-[highlighted]:text-magnum-900
              data-[disabled]:opacity-50"
							use:melt={$option(item)}
						>
							{#if $isSelected(item.value)}
								<span class="absolute left-4">✓</span>
							{/if}

							{item.label}
						</div>
					{/each}
				</div>
			{/each}
		</div>
	{/if}
</div>
