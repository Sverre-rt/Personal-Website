import type { Image } from './sanity_types_image';

export interface CompanyType {
	name: string;
	location: GeoData;
	logo: Image;
	startDate: string;
	endDate: string;
	position: string;
	jobDescription: string;
	city: string;
	country: string;
	memoryImage: Image;
}

interface GeoData {
	alt: number;
	lat: number;
	lng: number;
}

export interface Social_media {
	title: string;
	image: Image;
	url: string;
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
}

export interface Person {
	address: string;
	birthday: string;
	first_name: string;
	last_name: string;
	profile_picture: Image;
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
}

export interface Bitmoji {
	bitmoji: Image;
	name: string;
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
}

export interface Technology {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
	category: string;
	name: string;
}

export enum Technology_Name {
	Programming_languages = 'Programming languages',
	Frontend_frameworks_and_libraries = 'Frontend frameworks and libraries',
	Backend_technologies = 'Backend technologies',
	Platforms_and_hosting = 'Platforms and hosting',
	Content_management_systems = 'Content management systems'
}
