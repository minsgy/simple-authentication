import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/simple-authentication/',
  publicDir: false,
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: { lintCommand: 'eslint ./src --ext .ts,.tsx' },
    }),
    tsconfigPaths(),
  ],
})
