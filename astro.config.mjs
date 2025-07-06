// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
// @ts-expect-error: módulo sin tipos declarados
import vercel from '@astrojs/vercel/edge';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: vercel({}),
});
