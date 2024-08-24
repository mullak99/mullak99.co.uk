<script>
	import { faBolt, faCheckCircle, faCogs } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon as Fa } from '@fortawesome/svelte-fontawesome';
</script>

<!-- Hero Section -->
<section
	class="relative flex items-center justify-center h-screen bg-cover bg-center dark:bg-neutral-800"
	style="background-image: url('https://source.unsplash.com/random/1600x900')"
>
	<div class="absolute inset-0 bg-black opacity-50"></div>
	<div class="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
		<h1 class="text-5xl font-extrabold text-white dark:text-neutral-100 sm:text-6xl lg:text-7xl">
			Build Your Next App with SvelteKit
		</h1>
		<p class="mt-6 text-lg text-neutral-300 dark:text-neutral-400 sm:text-xl lg:text-2xl">
			Fast, flexible, and feature-rich framework for modern web development.
		</p>
		<a
			href="/about"
			class="mt-8 inline-block px-8 py-3 bg-green-700 text-white text-lg font-semibold rounded-lg hover:bg-green-600"
		>
			Get Started
		</a>
	</div>
</section>

<!-- Features Section -->
<section class="py-16 bg-white dark:bg-neutral-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="text-3xl font-extrabold text-neutral-900 dark:text-neutral-100 sm:text-4xl">
				Why Choose SvelteKit?
			</h2>
			<p class="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
				Here are some of the benefits of using SvelteKit for your next project.
			</p>
		</div>
		<div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			<!-- Feature 1 -->
			<div class="bg-white dark:bg-neutral-700 shadow-lg rounded-lg p-6">
				<div
					class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 dark:bg-blue-600 text-white"
				>
					<Fa icon={faBolt} class="h-6 w-6" />
				</div>
				<h3 class="mt-8 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
					Fast Performance
				</h3>
				<p class="mt-4 text-base text-neutral-500 dark:text-neutral-400">
					SvelteKit is designed for speed and efficiency, ensuring your app is fast and responsive.
				</p>
			</div>
			<!-- Feature 2 -->
			<div class="bg-white dark:bg-neutral-700 shadow-lg rounded-lg p-6">
				<div
					class="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 dark:bg-green-600 text-white"
				>
					<Fa icon={faCheckCircle} class="h-6 w-6" />
				</div>
				<h3 class="mt-8 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
					Simple to Use
				</h3>
				<p class="mt-4 text-base text-neutral-500 dark:text-neutral-400">
					SvelteKit offers a straightforward and intuitive API, making development faster and
					easier.
				</p>
			</div>
			<!-- Feature 3 -->
			<div class="bg-white dark:bg-neutral-700 shadow-lg rounded-lg p-6">
				<div
					class="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 dark:bg-red-600 text-white"
				>
					<Fa icon={faCogs} class="h-6 w-6" />
				</div>
				<h3 class="mt-8 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
					Full-featured
				</h3>
				<p class="mt-4 text-base text-neutral-500 dark:text-neutral-400">
					Packed with features, SvelteKit provides everything you need to build powerful
					applications.
				</p>
			</div>
		</div>
	</div>
</section>
