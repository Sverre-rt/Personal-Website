import client from '../sanity/sanityClient';

// export async function load() {
// 	const people_data = await client.fetch(`*[_type == "people"]`);
// 	const social_media_data = await client.fetch(`*[_type == "social_media"]`);

// 	if (people_data && social_media_data) {
// 		return {
// 			status: 200,
// 			body: {
// 				people: people_data,
// 				social_media: social_media_data
// 			}
// 		};
// 	}
// 	return {
// 		status: 500,
// 		body: new Error('Internal Server Error')
// 	};
// }
