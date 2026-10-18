<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import { faCode, faDownload, faLink } from '@fortawesome/free-solid-svg-icons';
	import type { Picture } from '@sveltejs/enhanced-img';
	import IconButton from '../components/IconButton.svelte';

	export let image: Picture;
	export let title: string = '';
	export let href: string = '';
	export let visitHref: string = '';
	export let downloadHref: string = '';
	export let sourceHref: string = '';
	export let classNames: string = '';
	export let imageShadow: boolean = true;
</script>

<!-- Content Section -->
<div
	class="project-tile relative bg-white dark:bg-neutral-700 rounded-lg shadow-lg overflow-hidden min-h-87.5 flex flex-1 flex-col justify-between has-[.tile-link:focus-visible]:outline-3 outline-green-600 outline-offset-4 {href
		? 'transition-transform duration-200 ease-in-out motion-safe:hover:scale-[1.02] motion-reduce:transition-none'
		: ''} {classNames}"
>
	<div class="grid grid-cols-1 lg:grid-cols-4 justify-items-center p-6 grow">
		<div class="w-full h-full flex items-start justify-start">
			<enhanced:img
				class={`w-full h-auto object-cover rounded-lg ${imageShadow ? 'shadow-lg' : ''}`}
				src={image}
				alt={title}
				loading="lazy"
				decoding="async"
				sizes="(min-width: 1920px) calc((58.3333vw - 192px) / 8), (min-width: 1024px) calc((58.3333vw - 112px) / 4), (min-width: 640px) calc(58.3333vw - 96px), calc(100vw - 80px)"
			/>
		</div>
		<div class="px-6 col-span-3 mt-2">
			<h3 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
				{#if href}
					<a class="tile-link after:absolute after:inset-0" href={resolve(href as Pathname)}
						>{title}</a
					>
				{:else}
					{title}
				{/if}
			</h3>
			<div class="text-neutral-600 dark:text-neutral-300 [&_a]:relative [&_a]:z-10">
				<slot />
			</div>
		</div>
	</div>

	<!-- Footer Section -->
	<div class="px-6 w-full flex justify-between items-center mt-auto mb-6 [&_a]:relative [&_a]:z-10">
		<div class="flex justify-start">
			<div class="grid grid-rows-1 grid-flow-col gap-5 ml-2">
				{#if visitHref}
					<IconButton icon={faLink} size="xl" title="Visit" href={visitHref} />
				{/if}
				{#if downloadHref}
					<IconButton icon={faDownload} size="xl" title="Download" href={downloadHref} />
				{/if}
				{#if sourceHref}
					<IconButton icon={faCode} size="xl" title="Source" href={sourceHref} />
				{/if}
			</div>
		</div>
	</div>
</div>
