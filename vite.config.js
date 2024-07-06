import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Beautiful-Animation/",
  build: {
    rollupOptions: {
      external: ['/vite.svg'],
      onwarn: (warning, warn) => {
        if (warning.code === 'UNRESOLVED_IMPORT') {
          if (warning.source === '/vite.svg') {
            return;
          }
        }
        warn(warning);
      }
    }
  }
})
