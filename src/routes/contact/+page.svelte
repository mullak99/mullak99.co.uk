<script lang="ts">
	import { faGithub, faXTwitter, faYoutube, faSteam } from '@fortawesome/free-brands-svg-icons';
	import { FontAwesomeIcon as Fa } from '@fortawesome/svelte-fontawesome';
</script>

<svelte:head>
	<title>mullak99.co.uk | Contact</title>
	<meta name="description" content="Contact" />
	<meta property="og:title" content="mullak99.co.uk | Contact" />
	<meta property="og:description" content="Contact" />
	<meta property="og:image" content="https://mullak99.co.uk/logo.png" />
</svelte:head>

<section
	class="relative flex items-center justify-center pb-4 bg-cover bg-center min-h-[calc(100vh-4rem-5rem)]"
>
	<div class="absolute inset-0"></div>
	<div class="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2
			class="text-3xl font-extrabold text-neutral-900 dark:text-neutral-100 sm:text-4xl lg:text-5xl lg:text-5xl"
		>
			Get in Touch
		</h2>
		<p class="mt-6 text-lg text-neutral-600 dark:text-neutral-300 sm:text-xl lg:text-2xl">
			Feel free to reach out via email or on social media.
		</p>
		<div class="mt-8">
			<a
				href="mailto:mullak99@mullak99.co.uk"
				class="block text-lg text-neutral-900 dark:text-neutral-100"
				title="Email"
				aria-label="Email"
			>
				mullak99@mullak99.co.uk
			</a>
			<div class="mt-4 flex justify-center space-x-6">
				<a
					href="https://github.com/mullak99"
					class="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100"
					title="GitHub"
					aria-label="GitHub"
				>
					<Fa icon={faGithub} class="h-6 w-6" />
				</a>
				<a
					href="https://x.com/mullak99"
					class="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100"
					title="X"
					aria-label="X"
				>
					<Fa icon={faXTwitter} class="h-6 w-6" />
				</a>
				<a
					href="https://youtube.com/mullak99"
					class="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100"
					title="YouTube"
					aria-label="YouTube"
				>
					<Fa icon={faYoutube} class="h-6 w-6" />
				</a>
				<a
					href="http://steamcommunity.com/id/mullak99"
					class="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100"
					title="Steam"
					aria-label="Steam"
				>
					<Fa icon={faSteam} class="h-6 w-6" />
				</a>
			</div>
		</div>
	</div>
</section>
