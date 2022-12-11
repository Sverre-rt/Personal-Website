import sanityClient from '@sanity/client';
// import { SECRET_SANITY_PROJECT_ID_KEY } from '$env/static/private';
// import { PUBLIC_SANITY_PROJECT_ID_KEY } from '$env/static/public';
import { PUBLIC_SANITY_PROJECT_ID_KEY } from '../lib/Env';

const client = sanityClient({
	projectId: PUBLIC_SANITY_PROJECT_ID_KEY,
	dataset: 'production',
	apiVersion: '2022-12-06',
	useCdn: false
});

export default client;
