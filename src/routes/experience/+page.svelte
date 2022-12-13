<!-- <script context="module">
	export const prerender = true;
</script> -->
<script lang="ts">
	import type { CompanyType } from '../../types/sanity_types';
	import myConfiguredSanityClient from '../../sanity/sanityClient';
	import imageUrlBuilder from '@sanity/image-url';
	import { urlFor } from '../helper_functions/SanityHelper.svelte';
	const builder = imageUrlBuilder(myConfiguredSanityClient);

	export let data: any;
	export let companies: CompanyType[] = data.body.companies;
</script>

<div class="text-black bg-grey-background-1 h-screen pt-6 ml-4">
	<p class="text-4xl mb-4">My work experience</p>
	<div class="flex flex-row flex-wrap gap-6 justify-center">
		{#each companies as companie}
			<div
				class="flex flex-col custom_width bg-grey-background-2 items-center drop-shadow-lg border rounded-lg border-grey-border"
			>
				<div
					class="flex w-full rounded-t-lg bg-red-home justify-center pt-4 pb-4 border-b-2 border-grey-border"
				>
					<img
						src={urlFor(companie.logo).url()}
						class="w-fit min-h-12 max-h-12"
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

<style>
	.custom_width {
		width: 32rem;
	}
</style>
