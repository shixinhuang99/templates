import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    port: 8082,
    https: true,
  },
  css: {
    modules: {
      generateScopedName: '[local]_[hash:base64:5]',
    },
  },
  resolve: {
    alias: {
      src: '/src',
    },
  },
})
