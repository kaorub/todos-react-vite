import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true, // Enable global test functions like `describe`, `test`, etc.
        environment: 'jsdom', // Use jsdom for testing React components
        setupFiles: './src/setupTests.ts', // Path to setup file (optional)
        coverage: {
            reporter: ['text', 'html'], // Enable coverage reporting
        },
    },
});