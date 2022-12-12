<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { urlFor } from './helper_functions/SanityHelper.svelte';

	let routes = [
		{ title: 'Home', url: '/' },
		{ title: 'Projects', url: '/projects' },
		{ title: 'Experience', url: '/experience' },
		{ title: 'Contact', url: '/contact' }
	];

	let data = $$props.data;
	console.log('HEADER DATA:', data);
</script>

<nav class="flex sticky top-0 items-center bg-grey-background-1 z-50">
	<div class="ml-6 ">
		<a href="/">
			<img
				src={urlFor(data.body.bitmojis[0].bitmoji).url()}
				class="w-20"
				alt="bitmoji-{data.body.bitmojis[0].name}"
				loading="lazy"
			/>
		</a>
	</div>
	<div class="flex flex-row ml-auto	space-x-6 mr-4 py-2 text-2xl ">
		{#each routes as route}
			<a
				data-sveltekit-preload-data="tap"
				href={route.url}
				class="hover:text-red-home"
				class:active={$page.url.pathname === route.url}>{route.title}</a
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
