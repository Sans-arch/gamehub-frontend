import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: "./src/setupTests.ts",
    coverage: {
      enabled: true,
      provider: 'v8',
      all: true,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: [
        'src/main.tsx',
        'src/App.tsx',
        'src/**/styles.ts',
        'src/styles/**',
        'src/types/**',
        'src/services/**',
        'src/pages/**',
        'src/contexts/**',
        'src/routes/**',
        'src/**/*.d.ts',
        'src/**/*.test.ts',
        'src/**/*.test.tsx'
      ],
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './src/tests/coverage'
    }
  }
});
