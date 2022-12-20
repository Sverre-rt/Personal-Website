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

<div class="flex flex-col md:flex-row text-black pt-6 bg-grey-background-1 h-screen">
	<div class="flex flex-col px-2 md:w-2/5">
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
	<div class="flex flex-col md:w-3/5 ml-2 md:ml-0">
		<p class="text-4xl mb-4">My work experience</p>
		<div class="small_screen_experience medium_screen_experience">
			{#each companies as companie, i}
				<div
					class="flex flex-col small_width medium_width bg-grey-background-2 items-center drop-shadow-lg border rounded-lg border-grey-border flex-none snap-start my-2"
				>
					<div
						class="flex w-full rounded-t-lg justify-center pt-4 pb-4 border-b-2 border-grey-border {card_bg_colors[
							i % card_bg_colors.length
						]}"
					>
						<img
							src={urlFor(companie.logo).url()}
							class="h-14"
							alt="logo-{companie.name}"
							loading="lazy"
						/>
					</div>
					<div class="flex flex-col w-full px-2">
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
								class="w-2/5 md:w-60"
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
	@media screen and (min-width: 768px) {
		.medium_width {
			width: 32rem;
		}

		.medium_screen_experience {
			/* md (768px)	 */
			display: flex;
			flex-direction: row;
			gap: 1rem;
			overflow-x: scroll;
			scroll-snap-type: x var(--tw-scroll-snap-strictness);
			scroll-behavior: smooth;
			margin-right: 0.5rem;
			scroll-padding-left: 0.5rem;
		}
	}

	@media screen and (max-width: 767px) {
		.small_width {
			max-width: 32rem;
		}

		.small_screen_experience {
			/* sm (640px)	 */
			display: flex;
			flex-direction: column;
			margin-right: 0.5rem;
		}
	}
</style>
