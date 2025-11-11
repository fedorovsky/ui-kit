import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import wyw from '@wyw-in-js/vite';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import * as path from 'path';
import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';

const entryPoints = Object.fromEntries(
  glob
    .sync('src/**/*.{ts,tsx}', {
      ignore: ['src/**/*.stories.{ts,tsx}'],
    })
    .map((file) => [
      relative('src', file.slice(0, file.length - extname(file).length)),
      fileURLToPath(new URL(file, import.meta.url)),
    ])
);

console.log('================');
console.log(entryPoints);
console.log('================');

export default defineConfig({
  plugins: [
    libInjectCss(),
    dts({
      include: ['src'],
      exclude: ['**/*.stories.{ts,tsx}'],
    }),
    wyw({
      include: ['src/**/*.{ts,tsx}'],
      babelOptions: {
        presets: [['@babel/preset-typescript', { allowDeclareFields: true }]],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@mstyle/theme',
        '@mstyle/theme/theme.css',
      ],
      input: entryPoints,
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
    target: 'es2020',
    outDir: 'dist',
  },
});
