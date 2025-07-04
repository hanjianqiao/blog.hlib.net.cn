// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '智晦',
			pagefind: false,
			defaultLocale: 'zh-CN',
			routeMiddleware: './src/middleware/routeMiddleware.ts',
			social: {
				email: 'mailto:lanchitour@gmail.com',
			},
			components: {
				PageFrame: './src/components/PageFrame.astro',
			},
			sidebar: [
				{
					label: '密码安全',
					autogenerate: { directory: 'cryptography' },
				},
				{
					label: '网络安全',
					autogenerate: { directory: 'cybersecurity' },
				},
				{
					label: '操作系统',
					autogenerate: { directory: 'operating_systems' },
				},
				{
					label: '实践杂谈',
					autogenerate: { directory: 'practical_talk' },
				},
				{
					label: 'C++笔记',
					autogenerate: { directory: 'cpp_notes' },
				},
				{
					label: '软件开发',
					autogenerate: { directory: 'software_dev' },
				},
			],
		}),
	],
});
