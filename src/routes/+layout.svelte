<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { urlFor } from './helper_functions/SanityHelper.svelte';
	import type { Bitmoji } from 'src/types/sanity_types';

	export let data: any;
	let sections = data.sections;
	let bitmojis: Bitmoji[] = data.body.bitmojis;
</script>

<nav class="flex sticky top-0 items-center bg-grey-background-1 z-50">
	<div class="ml-6 ">
		<a href="/">
			<img
				src={urlFor(bitmojis[0].bitmoji).url()}
				class="w-20"
				alt="bitmoji-{bitmojis[0].name}"
				loading="lazy"
			/>
		</a>
	</div>
	<div class="flex flex-row ml-auto	space-x-6 mr-4 py-2 text-2xl ">
		{#each sections as section}
			<a
				data-sveltekit-preload-data="tap"
				href="/{section.slug}"
				class="hover:text-red-home"
				class:active={$page.url.pathname === '/' + section.slug}
				>{section.title}
			</a>
		{/each}
	</div>
</nav>

<slot />

<style>
	a.active {
		font-style: italic;
	}
</style>
