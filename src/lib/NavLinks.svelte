<script>
	import NavLink from '$lib/NavLink.svelte';
	import {
		faHouse,
		faAddressCard,
		faDiagramProject,
		faAddressBook
	} from '@fortawesome/free-solid-svg-icons';
</script>

<NavLink path="/" title="Home" icon={faHouse} />
<NavLink path="/about" title="About" icon={faAddressCard} />
<NavLink path="/projects" title="Projects" icon={faDiagramProject} />
<NavLink path="/contact" title="Contact" icon={faAddressBook} />
