<!-- <script context="module">
	export const prerender = true;
</script> -->
<script lang="ts">
	import myConfiguredSanityClient from '../../sanity/sanityClient';
	import imageUrlBuilder from '@sanity/image-url';
	import { urlFor } from '../helper_functions/SanityHelper.svelte';
	import type { CompanyType } from 'src/types/sanity_types';
	const builder = imageUrlBuilder(myConfiguredSanityClient);

	const card_bg_colors = ['bg-card-bg-1', 'bg-card-bg-2', 'bg-card-bg-3', 'bg-card-bg-4'];

	export let data: any;
	const iterable_technologies: [string, string[]][] = Object.entries(data.body.technologies);
	export let companies: CompanyType[] = data.body.companies;
</script>

<div class="flex text-black pt-6 bg-grey-background-1 h-screen">
	<div class="flex flex-col w-2/5 px-2">
		<p class="text-4xl mb-4">Technologies worked with</p>
		<div class="flex flex-col flex-wrap">
			{#each iterable_technologies as [key, values]}
				<div class="mt-2">
					<p class="text-xl">{key}</p>
					<div class="flex flex-wrap mt-2">
						{#each values as value, i}
							<div
								class="border rounded px-2 py-1 m-0.5 md:m-1 {card_bg_colors[
									i % card_bg_colors.length
								]}"
							>
								<p>{value}</p>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="flex flex-col w-3/5 ml-auto">
		<p class="text-4xl mb-4">My work experience</p>
		<!-- <div class="flex flex-row flex-wrap gap-6 justify-center"> -->
		<div class="flex flex-row  gap-4 overflow-x-scroll snap-x scroll-smooth mr-2 scroll-pl-2">
			{#each companies as companie, i}
				<div
					class="flex flex-col custom_width bg-grey-background-2 items-center drop-shadow-lg border rounded-lg border-grey-border flex-none snap-start"
				>
					<div
						class="flex w-full rounded-t-lg justify-center pt-4 pb-4 border-b-2 border-grey-border {card_bg_colors[
							i % card_bg_colors.length
						]}"
					>
						<img
							src={urlFor(companie.logo).url()}
							class="w-fit min-h-14 max-h-14"
							alt="logo-{companie.name}"
							loading="lazy"
						/>
					</div>
					<div class="flex flex-col w-full pr-2 pl-2 ">
						<div class="flex flex-row justify-between items-center">
							<p class="underline underline-offset-2 font-futuraBold text-lg self-end">
								{companie.name}
							</p>
							<p class="text-sm	">
								{new Date(companie.startDate).toLocaleDateString('en-GB', {
									year: 'numeric',
									month: 'long'
								})} - {new Date(companie.endDate).toLocaleDateString('en-GB', {
									year: 'numeric',
									month: 'long'
								})}
							</p>
						</div>
						<div class="flex flex-row w-full pb-4 pr-1">
							<div class="pt-3">
								<p class="font-futuraMedium">Position: {companie.position}</p>
								<p class="pb-6 font-futuraMedium">Location: {companie.city}, {companie.country}</p>
								<p class="font-futuraHeavy">Job Description:</p>
								<p class="font-futuraMedium">{companie.jobDescription}</p>
							</div>
							<img
								src={urlFor(companie.memoryImage).width(1000).url()}
								class="w-60"
								alt="memory-{companie.name}"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.custom_width {
		width: 32rem;
	}
</style>
