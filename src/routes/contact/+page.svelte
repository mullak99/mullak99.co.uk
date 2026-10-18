<script lang="ts">
	import { faGithub, faXTwitter, faYoutube, faSteam } from '@fortawesome/free-brands-svg-icons';
	import IconButton from '$lib/components/IconButton.svelte';
	import Head from '$lib/Head.svelte';

	const description = 'Get in touch with mullak99 via email or social media.';
</script>

<Head title="Contact" {description} />

<section
	class="relative flex items-center justify-center pb-4 bg-cover bg-center min-h-[calc(100vh-4rem-5rem)]"
>
	<div class="absolute inset-0"></div>
	<div class="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
		<h1
			class="text-3xl font-extrabold text-neutral-900 dark:text-neutral-100 sm:text-4xl lg:text-5xl"
		>
			Get in Touch
		</h1>
		<p class="mt-6 text-lg text-neutral-600 dark:text-neutral-300 sm:text-xl lg:text-2xl">
			{description}
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
				<IconButton icon={faGithub} title="GitHub" href="https://github.com/mullak99" />
				<IconButton icon={faXTwitter} title="X" href="https://x.com/mullak99" />
				<IconButton icon={faYoutube} title="YouTube" href="https://youtube.com/mullak99" />
				<IconButton icon={faSteam} title="Steam" href="https://steamcommunity.com/id/mullak99" />
			</div>
		</div>
	</div>
</section>
