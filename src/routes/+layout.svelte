<script lang="ts">
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
		class="bg-neutral-100 dark:bg-neutral-800 shadow-md border-t border-neutral-300 dark:border-neutral-700 h-20 -mt-[1px]"
	>
		<div
			class="flex items-center justify-between max-w-7xl pb-1 mx-auto px-4 sm:px-6 lg:px-8 h-full"
		>
			<div class="container mx-auto flex items-center justify-between h-full">
				<div class="text-left flex items-center">
					<p>&copy; {new Date().getFullYear()} mullak99. All rights reserved.</p>
				</div>
				<!-- Source Code Link -->
				<button
					class="px-2.5 py-2 bg-neutral-200 dark:bg-neutral-700 rounded-full shadow-md hover:bg-neutral-300 dark:hover:bg-neutral-600 flex items-center"
					on:click={() => window.open('https://github.com/mullak99/mullak99.co.uk', '_blank')}
					title="Source Code"
				>
					<Fa
						icon={faCode}
						class="h-6 w-5 pt-[2px] px-[1px] text-neutral-700 dark:text-neutral-300 -m-[1px]"
					/>
				</button>
			</div>
		</div>
	</footer>
</main>
