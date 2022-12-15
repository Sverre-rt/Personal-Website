import { Technology_Name, type CompanyType, type Technology } from '../../types/sanity_types';
import client from '../../sanity/sanityClient';

export async function load() {
	// const data = await client.fetch(`*[_type == "companies"] | order(endDate desc)`);
	const data = await client.fetch(
		`*[_type in ["companies", "technologies"]] | order(endDate desc)`
	);

	const companies: CompanyType[] = [];
	const technologies: Technology[] = [];

	data.forEach((element: any) => {
		switch (element._type) {
			case 'companies':
				companies.push(element);
				break;
			case 'technologies':
				technologies.push(element);
				break;
			default:
				break;
		}
	});

	const technologies_dict: { [key: string]: string[] } = {
		[Technology_Name.Programming_languages]: [],
		[Technology_Name.Frontend_frameworks_and_libraries]: [],
		[Technology_Name.Backend_technologies]: [],
		[Technology_Name.Platforms_and_hosting]: [],
		[Technology_Name.Content_management_systems]: []
	};

	technologies.forEach((element: Technology) => {
		switch (element.category) {
			case Technology_Name.Programming_languages:
				technologies_dict[Technology_Name.Programming_languages].push(element.name);
				break;
			case Technology_Name.Frontend_frameworks_and_libraries:
				technologies_dict[Technology_Name.Frontend_frameworks_and_libraries].push(element.name);
				break;
			case Technology_Name.Backend_technologies:
				technologies_dict[Technology_Name.Backend_technologies].push(element.name);
				break;
			case Technology_Name.Platforms_and_hosting:
				technologies_dict[Technology_Name.Platforms_and_hosting].push(element.name);
				break;
			case Technology_Name.Content_management_systems:
				technologies_dict[Technology_Name.Content_management_systems].push(element.name);
				break;
			default:
				break;
		}
	});

	if (data) {
		return {
			status: 200,
			body: {
				companies: companies,
				technologies: technologies_dict
			}
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
