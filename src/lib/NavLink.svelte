<script>
	import { page } from '$app/stores';
	$: currentPath = $page.url.pathname;

	export let path = '';
	export let title = '';
</script>

<a
	href={path}
	class="hover:text-neutral-600 dark:hover:text-neutral-400 {currentPath === path
		? 'text-green-600 dark:text-green-400'
		: 'text-neutral-800 dark:text-neutral-200'}"
>
	{title}
</a>
