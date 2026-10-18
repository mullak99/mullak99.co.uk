<script lang="ts">
	import { resolve } from '$app/paths';
	import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon as Fa } from '@fortawesome/svelte-fontawesome';
	import type { Picture } from '@sveltejs/enhanced-img';
	import Head from '$lib/Head.svelte';

	export let title: string;
	export let description: string;
	export let image: Picture;
	export let imageShadow: boolean = true;
</script>

<Head {title} {description} />

<section class="min-h-[calc(100vh-4rem-5rem)] py-8">
	<div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
			<a
				href={resolve('/projects')}
				class="inline-flex items-center gap-2 justify-self-start text-neutral-600 underline hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-600 md:col-start-1 md:row-start-1 dark:text-neutral-300 dark:hover:text-neutral-100"
			>
				<Fa icon={faArrowLeft} />
				Back to projects
			</a>
			<h1
				class="text-center text-3xl font-extrabold text-neutral-900 dark:text-neutral-100 sm:text-4xl md:col-start-2 md:row-start-1 lg:text-5xl"
			>
				{title}
			</h1>
		</div>

		<div
			class="mt-10 grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-12"
		>
			<enhanced:img
				src={image}
				alt={title}
				class={`mx-auto h-auto w-full max-w-xs rounded-lg object-contain md:mx-0 ${imageShadow ? 'shadow-lg' : ''}`}
				sizes="(min-width: 368px) 320px, calc(100vw - 32px)"
				fetchpriority="high"
				decoding="async"
			/>
			<div class="min-w-0 text-left text-neutral-600 dark:text-neutral-300">
				<p class="text-lg leading-relaxed">{description}</p>
				<div class="mt-6 space-y-4 leading-relaxed">
					<slot />
				</div>
			</div>
		</div>
	</div>
</section>
