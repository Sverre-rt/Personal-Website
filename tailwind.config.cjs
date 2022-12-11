const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			fontFamily: {
				futuraLight: ['futura light'],
				futuraBook: ['futura book'],
				futuraMedium: ['futura medium'],
				futuraHeavy: ['futura heavy'],
				futuraBold: ['futura bold'],
				futuraBoldOblique: ['futura bold oblique'],
				sans: ['futura heavy', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				'red-home': '#c33608',
				'pink-home': '#f8c7c3',
				'black-home': '#030303',
				'grey-background-1': '#fafafd',
				'grey-background-2': '#f4f4f5',
				'projects-text': '#f0ead6',
				'projects-background': '#26252a',
				'projects-text-second': '#efb8ae',
				'page-3-blue': '#4ae5ef',
				'page-4-orange': '#f84f39',
				'grey-border': '#e5e7eB'
			}
		}
	},
	plugins: [require('flowbite/plugin')]
};
