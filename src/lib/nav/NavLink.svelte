<script lang="ts">
	import { page } from '$app/stores';
	import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
	import { FontAwesomeIcon as Fa } from '@fortawesome/svelte-fontawesome';
	$: currentPath = $page.url.pathname;

	export let path: string = '';
	export let title: string | null = '';
	export let icon: IconDefinition | null = null;
</script>

<a
	href={path}
	class="hover:text-neutral-600 dark:hover:text-neutral-400 transition-transform duration-200 ease-in-out hover:scale-95 {currentPath ===
	path
		? 'text-green-600 dark:text-green-400'
		: 'text-neutral-800 dark:text-neutral-200'}"
	{title}
>
	{#if icon}
		<Fa {icon} size="sm" class="pr-0.5" />
	{/if}
	{#if title}
		{title}
	{/if}
</a>
