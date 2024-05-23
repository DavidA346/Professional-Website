import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/professional-website/', // Ensure this matches your repository name
  build: {
    outDir: 'dist', // Ensure this matches your output directory
  },
});
