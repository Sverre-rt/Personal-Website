import client from '../sanity/sanityClient';

// export const load: PageServerLoad = async ()
// export async function load() {
// 	const data = await client.fetch(`*[_type == "bitmojis"]`);

// 	if (data) {
// 		return {
// 			status: 200,
// 			body: {
// 				bitmojis: data
// 			}
// 		};
// 	}
// 	return {
// 		status: 500,
// 		body: new Error('Internal Server Error')
// 	};
// }
