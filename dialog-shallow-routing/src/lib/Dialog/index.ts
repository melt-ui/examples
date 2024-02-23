import { createDialog, type CreateDialogProps, type Dialog as DialogType } from '@melt-ui/svelte';
import Trigger from './Trigger.svelte';
import Content from './Content.svelte';

export const DIALOG_NAMES = ['settings', 'login', 'delete'] as const;

export type DialogName = (typeof DIALOG_NAMES)[number];

function createDialogRegistry() {
	const registry = new Map<DialogName, DialogType>();

	function get(name: DialogName, props?: CreateDialogProps) {
		if (!registry.has(name)) {
			const dialog = createDialog(props);
			registry.set(name, dialog);
		}

		return registry.get(name) as DialogType;
	}

	function set(name: DialogName, dialog: DialogType) {
		registry.set(name, dialog);
	}

	return {
		get,
		set
	};
}

export const dialogRegistry = createDialogRegistry();

// If you need to predefine some props for a specific dialog, you can do it like this:
dialogRegistry.set('delete', createDialog({ role: 'alertdialog', closeOnEscape: false }));

export const Dialog = {
	Trigger: Trigger,
	Content: Content
};
