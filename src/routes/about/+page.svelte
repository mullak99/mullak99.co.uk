<script>
	import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon as Fa } from '@fortawesome/svelte-fontawesome';
</script>

<section
	class="relative flex items-center justify-center h-screen bg-cover bg-center dark:bg-neutral-800"
	style="background-image: url('https://source.unsplash.com/random/1600x900')"
>
	<div class="absolute inset-0 bg-black opacity-50"></div>
	<div class="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-5xl font-extrabold text-white dark:text-neutral-100 sm:text-6xl lg:text-7xl">
			About
		</h2>
		<p class="mt-6 text-lg text-neutral-300 dark:text-neutral-400 sm:text-xl lg:text-2xl">
			This page is a work in progress.
		</p>
		<Fa icon={faTriangleExclamation} class="mt-8 h-12 w-12 text-yellow-400 dark:text-yellow-300" />
	</div>
</section>
