import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/lib.ts'],
  clean: true,
  format: ['cjs'],
  target: 'node16',
})
