import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/serverless";
import sitemap from '@astrojs/sitemap';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), sitemap()],
  output: 'server',
  adapter: vercel(),
  site: 'https://meetdomaine.com/',
});