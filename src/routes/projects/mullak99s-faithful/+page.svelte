<script lang="ts">
	import ProjectPage from '$lib/projects/ProjectPage.svelte';
	import faithful from '../../../../static/projects/mullak99sFaithful.png?w=320;640&enhanced';
</script>

<ProjectPage
	title="mullak99's Faithful"
	description="mullak99's Faithful is a variation of Vattic's Faithful 32x resource pack dating back to 2012. It aims to remain close to its original style, with a few twists to suit my preferences."
	image={faithful}
>
	<p>
		Textures for blocks, items, and entities from MC1.8 and prior are mostly from
		<a
			class="underline hover:opacity-80"
			href="https://web.archive.org/web/20150607220656/http://www.minecraftforum.net:80/forums/mapping-and-modding/resource-packs/1223254-faithful-32x32-pack-update-red-cat-clay-1-8"
			>Vattic's Faithful 32x</a
		>, whereas MC1.9+ textures mostly use those from
		<a class="underline hover:opacity-80" href="https://github.com/ClassicFaithful"
			>Classic Faithful 32x</a
		>
		or <a class="underline hover:opacity-80" href="https://faithfulpack.net/">Faithful 32x</a>.
	</p>
	<p>
		The pack aims to loosely follow the pre-1.14 / Programmer Art texture style, as well as Vattic's
		original Faithful style.
	</p>
</ProjectPage>
