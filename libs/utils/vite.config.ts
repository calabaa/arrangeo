import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
/* Reference Vite Library Mode https://cn.vite.dev/guide/build.html#library-mode */

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'utils',
    },
  },
  plugins: [
    dts(), // Generate type definitions
  ],
})
