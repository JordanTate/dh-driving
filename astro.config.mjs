// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jordantate.github.io',
  base: '/dh-driving',
  vite: {
    plugins: [tailwindcss()],
  },
});
