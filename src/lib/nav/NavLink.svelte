<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
	import { FontAwesomeIcon as Fa } from '@fortawesome/svelte-fontawesome';

	type NavPath = '/' | '/about' | '/projects' | '/contact';

	let {
		path = '/',
		title = '',
		icon = null
	}: { path?: NavPath; title?: string | null; icon?: IconDefinition | null } = $props();

	const currentPath = $derived(page.url.pathname.replace(/\/$/, ''));
</script>

<a
	href={resolve(path)}
	class="hover:text-neutral-600 dark:hover:text-neutral-400 transition-transform duration-200 ease-in-out hover:scale-95 {currentPath ===
	path.replace(/\/$/, '')
		? 'text-green-600 dark:text-green-400'
		: 'text-neutral-800 dark:text-neutral-200'}"
	{title}
>
	{#if icon}
		<Fa {icon} size="sm" class="pr-0.5 w-4 h-4" />
	{/if}
	{#if title}
		{title}
	{/if}
</a>
