import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
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
