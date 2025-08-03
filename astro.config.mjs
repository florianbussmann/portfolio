// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

const isDev = process.env.NODE_ENV === 'development';

// https://astro.build/config
export default defineConfig({
  base: isDev ? '/' : '/portfolio/',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon()]
});