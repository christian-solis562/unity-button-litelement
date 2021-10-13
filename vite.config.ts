import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/unity-button.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  }
})
