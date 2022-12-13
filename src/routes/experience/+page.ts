import client from '../../sanity/sanityClient';

export async function load() {
	const data = await client.fetch(`*[_type == "companies"] | order(endDate desc)`);

	if (data) {
		return {
			status: 200,
			body: {
				companies: data
			}
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
