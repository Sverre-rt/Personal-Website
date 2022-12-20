<!-- <script context="module">
	export const prerender = true;
</script> -->
<script lang="ts">
	import type { Social_media } from 'src/types/sanity_types';
	import { urlFor } from './helper_functions/SanityHelper.svelte';

	let visibility = 'invisible';
	function handleMouseOver(event: any) {
		visibility = 'visible';
	}

	function handleMouseOut(event: any) {
		visibility = 'invisible';
	}
	export let data: any;
	let social_media_data: Social_media[] = data.body.social_media;
</script>

<div class="bg-grey-background-1 h-screen flex justify-center items-start">
	<div
		class="flex flex-col md:flex-row items-center justify-center md:space-x-16 pt-2 md:pt-12 max-w-3xl"
	>
		<div class="max-w-2xl px-2 md:px-0 pb-4 md:pb-0">
			<p class="text-3xl">Hi. I'm</p>
			<p class="text-4xl text-red-home">Sverre Rynning-Tønnesen</p>
			<div class="p-0.5 {visibility} rounded bg-red-home mt-1 animate-pulse" />
			<p class="text-xk">
				I’m not a great programmer; I’m just a good programmer with great habits. <br /><br />
			</p>
			<p class="text-xl">Welcome to my website and have a look around!</p>
			<div class="p-0.5 rounded bg-black mt-2" />
			<div class="flex flex-row space-x-1 pt-2">
				{#each social_media_data as s_media}
					<a href={s_media.url} target="_blank" rel="noopener noreferrer">
						<img
							src={urlFor(s_media.image).url()}
							class="w-20"
							alt="s_media-{s_media.title}"
							loading="lazy"
						/>
					</a>
				{/each}
			</div>
		</div>
		<div
			class="flex border-black border-8 rounded-full"
			on:mouseover={handleMouseOver}
			on:focus={() => void 0}
			on:mouseout={handleMouseOut}
			on:blur={() => void 0}
		>
			<img
				src={urlFor(data.body.people[0].profile_picture).width(2000).height(2000).url()}
				class="rounded-full border-8 w-80 drop-shadow-xl "
				alt="profile_picture"
				loading="lazy"
			/>
		</div>
	</div>
</div>
