<script lang="ts">
	import type { CompanyType } from '../../types/sanity_types';
	import { Img } from 'flowbite-svelte';
	import myConfiguredSanityClient from '../../sanity/sanityClient';
	import imageUrlBuilder from '@sanity/image-url';
	const builder = imageUrlBuilder(myConfiguredSanityClient);

	function urlFor(source: any) {
		return builder.image(source);
	}

	let data = $$props.data;
	export let companies: CompanyType[] = data.body.companies;
</script>

<div class="text-black bg-grey-background-1 h-screen">
	<h1>Companies worked for:</h1>
	{#each companies as companie}
		<p>{companie.name}</p>
		<Img src={urlFor(companie.logo).width(200).url()} />
	{/each}
</div>
