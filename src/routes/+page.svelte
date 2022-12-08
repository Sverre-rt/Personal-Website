<script lang="ts">
	import { Img } from 'flowbite-svelte';
	import { urlFor } from './helper_functions/SanityHelper.svelte';

	let visibility = 'invisible';
	function handleMouseOver(event: any) {
		visibility = 'visible';
	}

	function handleMouseOut(event: any) {
		visibility = 'invisible';
	}
	let data = $$props.data;
</script>

<div class="bg-grey-background-1 h-screen flex justify-center items-start">
	<div class="flex flex-row items-center justify-center space-x-16 pt-12 max-w-3xl">
		<div class="max-w-2xl">
			<p class="text-3xl">Hi. I'm</p>
			<p class="text-4xl text-red-home">Sverre Rynning-Tønnesen</p>
			<div class="p-0.5 {visibility} rounded bg-red-home mt-1 animate-pulse" />
			<p class="text-xk">
				I’m not a great programmer; I’m just a good programmer with great habits. <br /><br />
			</p>
			<p class="text-xl">Welcome to my website and have a look around!</p>
			<div class="p-0.5 rounded bg-black mt-2" />
		</div>
		<div
			on:mouseover={handleMouseOver}
			on:focus={() => void 0}
			on:mouseout={handleMouseOut}
			on:blur={() => void 0}
		>
			<Img
				src={urlFor(data.body.people[0].profile_picture).width(2000).height(2000).url()}
				class="rounded-full w-80 drop-shadow-xl outline outline-offset-4"
			/>
		</div>
	</div>
</div>
