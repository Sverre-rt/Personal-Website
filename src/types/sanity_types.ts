export type CompanyType = {
	name: string;
	location: GeoData;
	logo: Logo;
};

type GeoData = {
	alt: number;
	lat: number;
	lng: number;
};

type Logo = {
	asset: Ref;
};

type Ref = {
	_ref: string;
};
