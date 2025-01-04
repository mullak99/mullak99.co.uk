<script>
	import { faSun, faMoon, faBars } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon as Fa } from '@fortawesome/svelte-fontawesome';
	import NavLinks from '$lib/NavLinks.svelte';

	let isDarkMode = false;
	let isMenuOpen = false;

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

<nav class="bg-neutral-100 dark:bg-neutral-800 shadow-md">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a href="/">
					<img class="h-12 w-12" src="/logo.png" alt="mullak99" />
				</a>
			</div>
			<!-- Hamburger Menu -->
			<div class="flex md:hidden">
				<button
					class="px-2.5 py-2 bg-neutral-200 dark:bg-neutral-700 rounded-full shadow-md hover:bg-neutral-300 dark:hover:bg-neutral-600"
					on:click={() => (isMenuOpen = !isMenuOpen)}
				>
					{#if isMenuOpen}
						<Fa icon={faBars} class="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
					{:else}
						<Fa icon={faBars} class="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
					{/if}
				</button>
			</div>
			<!-- Navigation Links -->
			<div class="hidden md:flex w-full px-12">
				<div class="flex space-x-8 justify-start">
					<NavLinks />
				</div>
			</div>
			<!-- Dark Mode Toggle -->
			<button
				class="hidden md:block px-2.5 py-2 bg-neutral-200 dark:bg-neutral-700 rounded-full shadow-md hover:bg-neutral-300 dark:hover:bg-neutral-600"
				on:click={toggleDarkMode}
			>
				{#if isDarkMode}
					<Fa icon={faSun} class="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
				{:else}
					<Fa icon={faMoon} class="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
				{/if}
			</button>
		</div>
	</div>
	<!-- Mobile Menu -->
	{#if isMenuOpen}
		<div class="md:hidden lg:hidden">
			<div class="flex flex-col items-end px-2 pt-2 pb-3 space-y-4 sm:px-3">
				<NavLinks />
				<!-- svelte-ignore a11y_invalid_attribute -->
				<a
					class="md:hidden block text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400"
					role="button"
					href="#"
					tabindex="0"
					on:click={toggleDarkMode}
				>
					{#if isDarkMode}
						<Fa icon={faSun} class="h-4 w-4 pr-1 text-neutral-700 dark:text-neutral-300" />
						Light Mode
					{:else}
						<Fa icon={faMoon} class="h-4 w-4 pr-1 text-neutral-700 dark:text-neutral-300" />
						Dark Mode
					{/if}
				</a>
			</div>
		</div>
	{/if}
</nav>
