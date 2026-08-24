import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Pillay-Sir-s-ICSE-Classes/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        courses: resolve(__dirname, 'courses.html'),
        about: resolve(__dirname, 'about.html'),
        location: resolve(__dirname, 'location.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});
