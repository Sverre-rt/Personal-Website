import type { Person, Social_media } from 'src/types/sanity_types';
import client from '../sanity/sanityClient';

export async function load() {
	const data: Array<any> = await client.fetch(`*[_type in ["social_media", "people"]]`);
	const people_data: Person[] = [];
	const social_media_data: Social_media[] = [];

	data.forEach((element) => {
		switch (element._type) {
			case 'people':
				people_data.push(element);
				break;
			case 'social_media':
				social_media_data.push(element);
				break;
			default:
				break;
		}
	});
	if (people_data && social_media_data) {
		return {
			status: 200,
			body: {
				people: people_data,
				social_media: social_media_data
			}
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
