// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const isDev = process.env.NODE_ENV === 'development';

// https://astro.build/config
export default defineConfig({
  base: isDev ? '/' : '/portfolio/',
  vite: {
    plugins: [tailwindcss()]
  }
});