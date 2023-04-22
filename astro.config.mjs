import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import storyblok from "@storyblok/astro";

import netlify from "@astrojs/netlify/functions";

import { loadEnv } from 'vite';

const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  integrations: [compress(),tailwind(), storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    apiOptions: {
        region: 'us'
    },
    components: {
        article: 'storyblok/Article',
        page: 'storyblok/Page',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
        hero: 'storyblok/Hero',
        project: 'storyblok/Project',
        projectPreviewList: 'storyblok/ProjectPreviewList',
        projectPreviewListCard: 'storyblok/ProjectPreviewListCard'
    }
  })],
  output: 'server',
  adapter: netlify()
});