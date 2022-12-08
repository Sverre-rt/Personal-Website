<script lang="ts" context="module">
	import myConfiguredSanityClient from '../../sanity/sanityClient';
	import imageUrlBuilder from '@sanity/image-url';
	const builder = imageUrlBuilder(myConfiguredSanityClient);

	export function urlFor(source: any) {
		return builder.image(source);
	}
</script>
