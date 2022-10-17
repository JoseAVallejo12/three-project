import { defineConfig } from 'vite';
import path from 'path';
import ObjFileImport from 'unplugin-obj/vite';

export default defineConfig({
  plugins: [ObjFileImport()],
  assetsInclude: ['**/*.obj'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'Utilities': path.resolve(__dirname, 'src/utilities'),
    },
  },
})
