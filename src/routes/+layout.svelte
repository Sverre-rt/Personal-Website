<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { urlFor } from './helper_functions/SanityHelper.svelte';
	import { Img } from 'flowbite-svelte';

	function getRouteColors(route: string): string {
		// NOTE: NOT IN USE ANYMORE
		// Function for switching header background color
		switch (route) {
			case '/':
				return 'bg-white text-black';
			case '/projects':
				return 'bg-projects-background text-projects-text-second';
			case '/cv':
				return 'bg-page-3-background-1 text-black';
			case '/contact':
				return 'bg-page-4-orange text-white';
			default:
				return '';
		}
	}

	let routes = [
		{ title: 'Home', url: '/' },
		{ title: 'Projects', url: '/projects' },
		{ title: 'CV', url: '/cv' },
		{ title: 'Contact', url: '/contact' }
	];

	let data = $$props.data;
</script>

<nav class="flex sticky top-0 items-center bg-grey-background-1">
	<div class="ml-6 ">
		<a href="/">
			<Img src={urlFor(data.body.bitmojis[0].bitmoji).url()} class="w-20" />
		</a>
	</div>
	<div class="flex flex-row ml-auto	space-x-6 mr-4 py-2 text-2xl ">
		{#each routes as route}
			<a href={route.url} class="hover:text-red-home" class:active={$page.url.pathname == route.url}
				>{route.title}</a
			>
		{/each}
	</div>
</nav>

<slot />

<style>
	a.active {
		font-style: italic;
	}
</style>
