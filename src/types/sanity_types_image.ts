export interface Dimensions {
	aspectRatio: number;
	height: number;
	width: number;
}

export interface Location {
	_type: string;
	lat: number;
	lng: number;
}

export interface DarkMuted {
	background: string;
	foreground: string;
	population: number;
	title: string;
}

export interface DarkVibrant {
	background: string;
	foreground: string;
	population: number;
	title: string;
}

export interface Dominant {
	background: string;
	foreground: string;
	population: number;
	title: string;
}

export interface LightMuted {
	background: string;
	foreground: string;
	population: number;
	title: string;
}

export interface LightVibrant {
	background: string;
	foreground: string;
	population: number;
	title: string;
}

export interface Muted {
	background: string;
	foreground: string;
	population: number;
	title: string;
}

export interface Vibrant {
	background: string;
	foreground: string;
	population: number;
	title: string;
}

export interface Palette {
	darkMuted: DarkMuted;
	darkVibrant: DarkVibrant;
	dominant: Dominant;
	lightMuted: LightMuted;
	lightVibrant: LightVibrant;
	muted: Muted;
	vibrant: Vibrant;
}

export interface Metadata {
	dimensions: Dimensions;
	location: Location;
	lqip: string;
	palette: Palette;
}

export interface Image {
	_createdAt: Date;
	_id: string;
	_rev: string;
	_type: string;
	assetId: string;
	extension: string;
	metadata: Metadata;
	mimeType: string;
	originalFilename: string;
	path: string;
	sha1hash: string;
	size: number;
	url: string;
	_updatedAt: Date;
}
