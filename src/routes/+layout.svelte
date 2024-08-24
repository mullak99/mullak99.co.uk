<script>
	import '../app.css';
	import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon as Fa } from '@fortawesome/svelte-fontawesome';
	import { page } from '$app/stores';

	// Reactive statement to get the current pathname
	let currentPath = $page.url.pathname;

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
						<a
							href="/"
							class="text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400
				{currentPath === '/' ? 'text-green-600 dark:text-green-400' : ''}">Home</a
						>
						<a
							href="/about"
							class="text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400
				{currentPath === '/about' ? 'text-green-600 dark:text-green-400' : ''}">About</a
						>
					</div>
				</div>

				<!-- Dark Mode Toggle Button -->
				<button
					class="p-2 bg-neutral-200 dark:bg-neutral-700 rounded-full shadow-md hover:bg-neutral-300 dark:hover:bg-neutral-600"
					on:click={toggleDarkMode}
				>
					{#if isDarkMode}
						<Fa icon={faSun} class="h-5 w-5 text-neutral-300" />
					{:else}
						<Fa icon={faMoon} class="h-5 w-5 text-neutral-600" />
					{/if}
				</button>
			</div>
		</div>
	</nav>

	<!-- Content -->
	<slot />

	<!-- Footer -->
	<footer class="bg-neutral-800 dark:bg-neutral-900 text-neutral-300 mt-auto">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div class="flex justify-between items-center">
				<p class="text-sm">&copy; 2024 mullak99. All rights reserved.</p>
				<div class="flex space-x-6"></div>
			</div>
		</div>
	</footer>
</main>
