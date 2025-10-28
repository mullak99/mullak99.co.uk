<script lang="ts">
	import { faSun, faMoon, faCircleHalfStroke, faBars } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon as Fa } from '@fortawesome/svelte-fontawesome';
	import NavLinks from '$lib/nav/NavLinks.svelte';

	enum Theme {
		Auto = 'auto',
		Light = 'light',
		Dark = 'dark'
	}

	const allThemes = [
		{ theme: Theme.Auto, icon: faCircleHalfStroke, label: 'Auto' },
		{ theme: Theme.Light, icon: faSun, label: 'Light' },
		{ theme: Theme.Dark, icon: faMoon, label: 'Dark' }
	];

	// Check which theme is currently selected
	const getSelectedTheme = () => {
		if (typeof localStorage !== 'undefined') {
			const storedTheme = localStorage.getItem('theme');
			if (storedTheme) {
				return storedTheme as Theme;
			}
		}
		return Theme.Auto;
	};

	let selectedTheme: Theme = getSelectedTheme();
	let isMenuOpen: boolean = false;

	$: {
		selectedTheme = getSelectedTheme();
	}

	// Switch themes
	function switchTheme() {
		if (typeof document === 'undefined') return;

		if (selectedTheme === Theme.Auto) {
			selectedTheme = Theme.Light;
		} else if (selectedTheme === Theme.Light) {
			selectedTheme = Theme.Dark;
		} else {
			selectedTheme = Theme.Auto;
		}

		localStorage.setItem('theme', selectedTheme);
		applySelectedTheme();
	}

	// Apply the selected theme to the document
	function applySelectedTheme() {
		if (typeof document === 'undefined') return;

		if (
			selectedTheme === Theme.Dark ||
			(selectedTheme === Theme.Auto && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}

	applySelectedTheme();
</script>

<nav
	class="bg-neutral-100 dark:bg-neutral-800 shadow-md border-b border-neutral-300 dark:border-neutral-700"
>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16">
			<!-- Logo -->
			<div class="shrink-0">
				<a href="/" aria-label="Homepage">
					<enhanced:img
						class="h-12 w-12 transition-transform duration-200 ease-in-out hover:scale-110"
						src="/static/logo.png"
						alt="mullak99"
						title="mullak99"
					/>
				</a>
			</div>
			<!-- Hamburger Menu -->
			<div class="flex md:hidden">
				<button
					class="px-2.5 py-2 bg-neutral-200 dark:bg-neutral-700 rounded-full shadow-md hover:bg-neutral-300 dark:hover:bg-neutral-600 cursor-pointer"
					on:click={() => (isMenuOpen = !isMenuOpen)}
				>
					{#if isMenuOpen}
						<Fa
							icon={faBars}
							size="lg"
							class="py-0.5 my-0.5 mt-[2px] mb-[1px]  text-neutral-700 dark:text-neutral-300"
						/>
					{:else}
						<Fa
							icon={faBars}
							size="lg"
							class="py-0.5 my-0.5 mt-[2px] mb-[1px]  text-neutral-700 dark:text-neutral-300"
						/>
					{/if}
				</button>
			</div>
			<!-- Navigation Links -->
			<div class="hidden md:flex w-full px-12">
				<div class="flex space-x-8 justify-start">
					<NavLinks />
				</div>
			</div>
			<!-- Theme Toggle -->
			<button
				class="hidden md:block px-2.5 py-2 bg-neutral-200 dark:bg-neutral-700 rounded-full shadow-md hover:bg-neutral-300 dark:hover:bg-neutral-600 flex items-center justify-center cursor-pointer"
				on:click={switchTheme}
				title={`${selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)} Theme`}
				aria-label={`${selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)} Theme`}
			>
				{#each allThemes as option (option.theme)}
					{#if selectedTheme === option.theme}
						<Fa
							icon={option.icon}
							size="lg"
							class="py-0.5 my-0.5 mt-[2px] mb-[1px] text-neutral-700 dark:text-neutral-300"
						/>
					{/if}
				{/each}
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
					class="md:hidden block text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400 transition-transform duration-200 ease-in-out hover:scale-95"
					role="button"
					href="#"
					tabindex="0"
					on:click={switchTheme}
				>
					{#each allThemes as option (option.theme)}
						{#if selectedTheme === option.theme}
							<Fa icon={option.icon} class="h-4 w-4 pr-1 text-neutral-700 dark:text-neutral-300" />
							{option.label} Theme
						{/if}
					{/each}
				</a>
			</div>
		</div>
	{/if}
</nav>
