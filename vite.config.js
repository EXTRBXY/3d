import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true, // Needed for mobile access
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
}); 