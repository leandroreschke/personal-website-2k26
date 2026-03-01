// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      minify: 'esbuild',
    },
  },
  build: {
    format: 'directory',
  },
  devToolbar: {
    enabled: false,
  },
  image: {
    domains: [],
  },
  output: 'static',
});
