<script>
	import '../app.css';
	import { page } from '$app/state';
</script>

<section class="relative flex items-center justify-center min-h-screen bg-cover bg-center">
	<div class="absolute inset-0"></div>
	<div class="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2
			class="text-3xl font-extrabold text-neutral-900 dark:text-neutral-100 sm:text-4xl lg:text-5xl"
		>
			Error {page.status}
		</h2>
		<p class="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
			{page.error?.message}
		</p>
	</div>
</section>
