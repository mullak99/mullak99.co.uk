<script lang="ts">
	import type { SizeProp } from '@fortawesome/fontawesome-svg-core';
	import { type IconDefinition } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon as Fa } from '@fortawesome/svelte-fontawesome';

	export let icon: IconDefinition | null = null;
	export let title: string = '';
	export let href: string = '';
	export let classNames: string = '';
	export let size: SizeProp = 'lg';
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
	class="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-transform duration-200 ease-in-out hover:scale-90 {classNames}"
	{title}
	aria-label={title}
>
	{#if icon}
		<Fa {icon} {size} />
	{/if}
</a>
