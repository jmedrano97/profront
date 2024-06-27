import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'global': {}
  },
  server: {
    host: '0.0.0.0', // Cambiar a '0.0.0.0' si se ejecuta dentro de Docker
    port: 5173, // Puerto donde Vite servirá la aplicación
    proxy: {
      '/api': {
        target: 'http://api:8000', // Cambiar según la configuración de tu backend en Docker
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
