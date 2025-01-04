<script lang="ts">
	import { page } from '$app/stores';
	import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
	import { FontAwesomeIcon as Fa } from '@fortawesome/svelte-fontawesome';
	$: currentPath = $page.url.pathname;

	export let path = '';
	export let title = '';
	export let icon: IconDefinition | null = null;
</script>

<a
	href={path}
	class="hover:text-neutral-600 dark:hover:text-neutral-400 {currentPath === path
		? 'text-green-600 dark:text-green-400'
		: 'text-neutral-800 dark:text-neutral-200'}"
>
	{#if icon}
		<Fa {icon} class="h-4 w-4 pr-1" />
	{/if}
	{title}
</a>
