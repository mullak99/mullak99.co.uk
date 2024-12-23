<script>
	import '../app.css';
	import { faCode } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon as Fa } from '@fortawesome/svelte-fontawesome';
	import NavLink from '../lib/NavLink.svelte';

	let isDarkMode = false;

	// Check if dark mode is enabled
	const isDarkModeEnabled = () => {
		if (typeof document !== 'undefined') {
			return document.documentElement.classList.contains('dark');
		}
		return false;
	};

	$: {
		isDarkMode = isDarkModeEnabled();
	}

	// Toggle dark mode
	function toggleDarkMode() {
		isDarkMode = !isDarkMode;
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<main class="bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 min-h-screen">
	<!-- Navbar -->
	<nav class="bg-neutral-100 dark:bg-neutral-800 shadow-lg">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<!-- Logo -->
				<div class="flex-shrink-0">
					<a href="/">
						<img class="h-12 w-12" src="logo.png" alt="mullak99" />
					</a>
				</div>
				<div class="w-full px-12">
					<!-- Navigation Links -->
					<div class="flex space-x-8 justify-start">
						<NavLink path="/" title="Home" />
						<NavLink path="/about" title="About" />
						<NavLink path="/contact" title="Contact" />
					</div>
				</div>

				<!-- Dark Mode Toggle Button (Disabled) -->
				<!-- <button
					class="p-2 bg-neutral-200 dark:bg-neutral-700 rounded-full shadow-md hover:bg-neutral-300 dark:hover:bg-neutral-600"
					on:click={toggleDarkMode}
				>
					{#if isDarkMode}
						<Fa icon={faSun} class="h-5 w-5 text-neutral-300" />
					{:else}
						<Fa icon={faMoon} class="h-5 w-5 text-neutral-600" />
					{/if}
				</button> -->
			</div>
		</div>
	</nav>

	<!-- Content -->
	<slot />

	<!-- Footer -->
	<footer class="bg-neutral-800 dark:bg-neutral-900 text-neutral-300 mt-auto">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div class="flex justify-between items-center">
				<p class="text-sm">&copy; {new Date().getFullYear()} mullak99. All rights reserved.</p>
				<div class="flex space-x-6"></div>
				<!-- Source Code Link (Disabled as the repo is still private) -->
				<!--
				<a href="https://github.com/mullak99/mullak99.co.uk" target="_blank" rel="noopener noreferrer" title="Source Code" aria-label="Source Code">
					<Fa icon={faCode} class="h-5 w-5 text-neutral-300 hover:text-white dark:hover:text-neutral-100" />
				</a> -->
			</div>
		</div>
	</footer>
</main>
