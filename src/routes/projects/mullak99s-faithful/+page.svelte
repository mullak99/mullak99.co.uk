<script lang="ts">
	import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon as Fa } from '@fortawesome/svelte-fontawesome';
</script>

<section class="relative flex items-center justify-center min-h-screen bg-cover bg-center">
	<div class="absolute inset-0"></div>
	<div class="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2
			class="text-3xl font-extrabold text-neutral-900 dark:text-neutral-100 sm:text-4xl lg:text-5xl"
		>
			mullak99's Faithful
		</h2>
		<p class="mt-6 text-lg text-neutral-600 dark:text-neutral-300 sm:text-xl lg:text-2xl">
			This page is a work in progress.
		</p>
		<Fa icon={faTriangleExclamation} class="mt-8 h-12 w-12 text-yellow-400 dark:text-yellow-300" />
	</div>
</section>
