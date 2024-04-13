import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://docs.dragonschildhosting.net",
	integrations: [
		starlight({
			title: 'Draconis Docs',
			social: {
				github: 'https://toastielab.dev/Dragonschildhosting/Draconis-docs',
				discord: 'https://discord.gg/hmrmathweg',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
			],
		}),
	],
});
