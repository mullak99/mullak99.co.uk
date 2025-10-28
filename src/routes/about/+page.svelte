<script lang="ts">
	import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon as Fa } from '@fortawesome/svelte-fontawesome';
</script>

<svelte:head>
	<title>mullak99.co.uk | About</title>
	<meta name="description" content="About" />
	<meta property="og:title" content="mullak99.co.uk | About" />
	<meta property="og:description" content="About" />
	<meta property="og:image" content="https://mullak99.co.uk/logo.png" />
</svelte:head>

<section
	class="relative flex items-center justify-center pb-4 bg-cover bg-center min-h-[calc(100vh-4rem-5rem)]"
>
	<div class="absolute inset-0"></div>
	<div class="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2
			class="text-3xl font-extrabold text-neutral-900 dark:text-neutral-100 sm:text-4xl lg:text-5xl"
		>
			About
		</h2>
		<p class="mt-6 text-lg text-neutral-600 dark:text-neutral-300 sm:text-xl lg:text-2xl">
			<Fa icon={faTriangleExclamation} class="text-yellow-400 dark:text-yellow-300 mr-1" />
			This page is a work in progress.
			<Fa icon={faTriangleExclamation} class="text-yellow-400 dark:text-yellow-300 ml-1" />
		</p>
	</div>
</section>
