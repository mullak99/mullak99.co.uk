<script lang="ts">
	import ProjectTile from '$lib/ProjectTile.svelte';
</script>

<svelte:head>
	<title>mullak99.co.uk | Projects</title>
	<meta name="description" content="Projects" />
	<meta property="og:title" content="mullak99.co.uk | Projects" />
	<meta property="og:description" content="Projects" />
	<meta property="og:image" content="https://mullak99.co.uk/logo.png" />
</svelte:head>

<section class="relative flex py-8 justify-center bg-cover bg-center min-h-[calc(100vh-4rem-5rem)]">
	<div class="absolute inset-0"></div>
	<div class="relative z-10 text-center w-full sm:w-7/12 px-4 sm:px-6 lg:px-8">
		<h2
			class="text-3xl font-extrabold text-neutral-900 dark:text-neutral-100 sm:text-4xl lg:text-5xl"
		>
			Projects
		</h2>
		<p class="mt-6 text-lg text-neutral-600 dark:text-neutral-300 sm:text-xl lg:text-2xl">
			A collection of projects I have worked on.
		</p>

		<div class="mt-8 flex gap-8 grid grid-cols-1 4xl:grid-cols-2">
			<ProjectTile
				title="mullak99's Faithful"
				image="projects/mullak99sFaithful.png"
				downloadHref="https://www.curseforge.com/minecraft/texture-packs/mullak99s-faithful-32x"
				sourceHref="https://github.com/mullak99s-Faithful/mullak99sFaithful"
			>
				<p class="mt-4">
					mullak99's Faithful is a variation of <a
						class="underline hover:opacity-80"
						href="https://web.archive.org/web/20150607220656/http://www.minecraftforum.net:80/forums/mapping-and-modding/resource-packs/1223254-faithful-32x32-pack-update-red-cat-clay-1-8"
						>Vattic's Faithful 32x resource pack</a
					> dating back to 2012. It aims to remain close to its original style, with a few twists to
					suit my preferences.
				</p>
				<p class="mt-4">
					Textures to blocks/items/entities/etc. from MC1.8 and prior are (mostly) from Vattic's
					Faithful, whereas MC1.9+ textures (mostly) use those from <a
						class="underline hover:opacity-80"
						href="https://github.com/ClassicFaithful">Classic Faithful 32x</a
					>
					or
					<a class="underline hover:opacity-80" href="https://faithfulpack.net/">Faithful 32x</a>.
				</p>
				<p class="mt-4">
					The pack aims to (loosly) follow the Pre-1.14/Prog-Art texture style, as well as following
					Vattic's original Faithful style.
				</p>
			</ProjectTile>
			<ProjectTile
				title="FaithfulVenom"
				image="projects/FaithfulVenom.png"
				downloadHref="https://antvenom.com/files"
				sourceHref="https://github.com/mullak99s-Faithful/FaithfulVenom"
			>
				<p class="mt-4">
					Similar to mullak99's Faithful, FaithfulVenom is a variation of <a
						class="underline hover:opacity-80"
						href="https://web.archive.org/web/20150607220656/http://www.minecraftforum.net:80/forums/mapping-and-modding/resource-packs/1223254-faithful-32x32-pack-update-red-cat-clay-1-8"
						>Vattic's Faithful 32x</a
					>, created by AntVenom to have SkitScape's UI and a Beta-inspired colormap.
				</p>
				<p class="mt-4">
					I started managing the pack for Ant starting in 2021, at which point the textures were
					replaced with those from then Compliance (now Faithful). At this point it essentially
					became a fork of mullak99's Faithful, although without some of the tweaks, a custom
					hotbar, and the original FV colormap.
				</p>
			</ProjectTile>
		</div>
		<p class="mt-6 text-sm text-neutral-500 dark:text-neutral-400 sm:text-md lg:text-lg">
			More projects will be listed in the future. In the mean time, additional projects can be found
			on my <a class="underline" href="https://github.com/mullak99">GitHub</a>.
		</p>
	</div>
</section>
