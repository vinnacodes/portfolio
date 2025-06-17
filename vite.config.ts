import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/", // <--- MUST match the repo name exactly
});
