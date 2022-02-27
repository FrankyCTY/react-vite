import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig(({ command }) => {
  return {
    plugins: [react(), eslintPlugin()],
    resolve: {
      alias: [
        {
          find: 'src',
          replacement: resolve(__dirname, 'src'),
        },
        {
          find: '@',
          replacement: resolve(__dirname, 'test'),
        },
      ],
    },
  };
});
