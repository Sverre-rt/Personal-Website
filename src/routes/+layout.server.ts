import client from '../sanity/sanityClient';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	const data = await client.fetch(`*[_type == "bitmojis"]`);

	if (data) {
		return {
			status: 200,
			body: {
				bitmojis: data
			},
			sections: [
				{ slug: '', title: 'Home' },
				{ slug: 'projects', title: 'Projects' },
				{ slug: 'experience', title: 'Experience' },
				{ slug: 'contact', title: 'Contact' }
			]
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
