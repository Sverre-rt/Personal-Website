import client from '../sanity/sanityClient';

// export const load: PageServerLoad = async ()
export async function load() {
	const data = await client.fetch(`*[_type == "people"]`);

	if (data) {
		return {
			status: 200,
			body: {
				people: data
			}
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
