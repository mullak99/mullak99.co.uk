<script lang="ts">
	import { faCode, faDownload, faLink } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon as Fa } from '@fortawesome/svelte-fontawesome';

	export let image = '';
	export let title = '';
	export let href = '';
	export let visitHref = '';
	export let downloadHref = '';
	export let sourceHref = '';
	export let classNames = '';
	export let imageShadow = true;
</script>

<!-- Content Section -->
<div
	class="bg-white dark:bg-neutral-700 rounded-lg shadow-lg overflow-hidden min-h-[350px] flex flex-1 flex-col justify-between {classNames}"
>
	<div class="grid grid-cols-1 lg:grid-cols-4 justify-items-center p-6 flex-grow">
		<div class="w-full h-full flex items-start justify-start">
			<img
				class={`w-full h-auto object-cover rounded-lg ${imageShadow ? 'shadow-lg' : ''}`}
				src={image}
				alt={title}
			/>
		</div>
		<div class="px-6 col-span-3 mt-2">
			<h3 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100">{title}</h3>
			<div class="text-neutral-600 dark:text-neutral-300">
				<slot />
			</div>
		</div>
	</div>

	<!-- Footer Section -->
	<div class="px-6 w-full flex justify-between items-center mt-auto mb-6">
		<div class="flex justify-start">
			<div class="grid grid-rows-1 grid-flow-col gap-5 ml-2">
				{#if visitHref}
					<a
						href={visitHref}
						target="_blank"
						rel="noopener noreferrer"
						class="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
						title="Visit"
						aria-label="Visit"
					>
						<Fa icon={faLink} class="h-6 w-6" />
					</a>
				{/if}
				{#if downloadHref}
					<a
						href={downloadHref}
						target="_blank"
						rel="noopener noreferrer"
						class="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
						title="Download"
						aria-label="Download"
					>
						<Fa icon={faDownload} class="h-6 w-6" />
					</a>
				{/if}
				{#if sourceHref}
					<a
						href={sourceHref}
						target="_blank"
						rel="noopener noreferrer"
						class="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
						title="Source"
						aria-label="Source"
					>
						<Fa icon={faCode} class="h-6 w-6" />
					</a>
				{/if}
			</div>
		</div>
		<div class="flex justify-end">
			{#if href}
				<button
					class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
					on:click={() => (window.location.href = href)}
				>
					Learn More
				</button>
			{/if}
		</div>
	</div>
</div>
