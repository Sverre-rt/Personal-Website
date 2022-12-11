export type CompanyType = {
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
};

type GeoData = {
	alt: number;
	lat: number;
	lng: number;
};

type Image = {
	asset: Ref;
};

type Ref = {
	_ref: string;
};

export type Social_media = {
	title: string;
	image: Image;
	url: string;
};
