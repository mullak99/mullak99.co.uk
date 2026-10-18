<script lang="ts">
	import { SITE_URL } from './site';

	let props = $props();

	const pageTitle = $derived(`mullak99.co.uk | ${props.title ?? ''}`);
	const pageDescription = $derived(props.description ?? props.title ?? '');

	const ogTitle = $derived(props.ogTitle ?? pageTitle);
	const ogImage = $derived(`${SITE_URL}/logo.png`);
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />

	<!-- Open Graph  Meta Tags -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={ogTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:image" content={ogImage} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@mullak99" />
	<meta name="twitter:title" content={ogTitle} />
	<meta name="twitter:description" content={pageDescription} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>
