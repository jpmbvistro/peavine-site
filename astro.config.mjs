import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import storyblok from "@storyblok/astro";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [compress(), mdx(), tailwind(), storyblok({
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    bridge: true,
    componentsDir: 'src',
    region: 'us',
    components: {
      page: 'storyblok/Page',
      feature: 'storyblok/Feature',
      grid: 'storyblok/Grid',
      teaser: 'storyblok/Teaser',
      blogPost: 'storyblok/BlogPost',
      blogPostList: 'storyblok/BlogPostList'
    }
  })],
  output: 'server',
  adapter: netlify()
});