<script>
	import '../app.css';
	import { faCode } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon as Fa } from '@fortawesome/svelte-fontawesome';
	import NavBar from '$lib/NavBar.svelte';
</script>

<main class="bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
	<!-- Navbar -->
	<NavBar />

	<!-- Content -->
	<slot />

	<!-- Footer -->
	<footer
		class="bg-neutral-50 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 mt-auto shadow-md"
	>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-8">
			<div class="flex justify-between items-center">
				<p class="text-sm">&copy; {new Date().getFullYear()} mullak99. All rights reserved.</p>
				<div class="flex space-x-6"></div>
				<!-- Source Code Link -->
				<a
					href="https://github.com/mullak99/mullak99.co.uk"
					target="_blank"
					rel="noopener noreferrer"
					title="Source Code"
					aria-label="Source Code"
				>
					<Fa
						icon={faCode}
						class="h-5 w-5 text-neutral-300 hover:text-white dark:hover:text-neutral-100"
					/>
				</a>
			</div>
		</div>
	</footer>
</main>
