/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import dts from 'vite-plugin-dts';
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// Plugin to copy global.css to dist
const copyGlobalCss = () => ({
  name: 'copy-global-css',
  closeBundle() {
    const src = path.resolve(dirname, 'scripts/global.css');
    const dest = path.resolve(dirname, 'dist/global.css');
    try {
      mkdirSync(path.dirname(dest), { recursive: true });
      copyFileSync(src, dest);
      console.log('Copied global.css to dist/');
    } catch (err) {
      console.error('Failed to copy global.css:', err);
    }
  },
});

// Plugin to inject CSS import into dist/index.js
const injectCssImport = () => ({
  name: 'inject-css-import',
  closeBundle() {
    // Inject into ESM bundle
    const indexPath = path.resolve(dirname, 'dist/index.js');
    try {
      const content = readFileSync(indexPath, 'utf-8');
      const withCssImport = `import"./index.css";\n${content}`;
      writeFileSync(indexPath, withCssImport);
      console.log('Injected CSS import into dist/index.js');
    } catch (err) {
      console.error('Failed to inject CSS import into ESM:', err);
    }

    // Inject into CJS bundle
    const cjsPath = path.resolve(dirname, 'dist/cjs/index.cjs');
    try {
      const content = readFileSync(cjsPath, 'utf-8');
      // For CJS, we need to use require
      const withCssImport = `require("./sun-design-system.css");\n${content}`;
      writeFileSync(cjsPath, withCssImport);
      console.log('Injected CSS import into dist/cjs/index.cjs');
    } catch (err) {
      console.error('Failed to inject CSS import into CJS:', err);
    }
  },
});

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vanillaExtractPlugin(),
    copyGlobalCss(),
    injectCssImport(),
    dts({
      insertTypesEntry: true,
      entryRoot: path.resolve(dirname, 'src'),
      outDir: path.resolve(dirname, 'dist/types'),
      include: [
        'src/index.ts',
        'src/components/index.ts',
        'src/utils/**/*.ts',
        // Only include exported components
        'src/components/button/**/*.{ts,tsx}',
        'src/components/input/**/*.{ts,tsx}',
        'src/components/textField/**/*.{ts,tsx}',
        'src/components/textarea/**/*.{ts,tsx}',
        'src/components/textareaField/**/*.{ts,tsx}',
        'src/components/radioGroup/**/*.{ts,tsx}',
        'src/components/badge/**/*.{ts,tsx}',
        'src/components/divider/**/*.{ts,tsx}',
        'src/components/switch/**/*.{ts,tsx}',
        'src/components/tooltip/**/*.{ts,tsx}',
        'src/components/tab/**/*.{ts,tsx}',
        'src/components/snackbar/**/*.{ts,tsx}',
        'src/components/modal/**/*.{ts,tsx}',
        'src/components/scrollbar/**/*.{ts,tsx}',
      ],
      exclude: ['**/*.stories.tsx', '**/*.test.tsx', '**/*.spec.tsx'],
      tsconfigPath: './tsconfig.build.json',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(dirname, 'src/index.ts'),
      name: 'BecraftUI',
      formats: ['es', 'cjs'],
    },
    cssCodeSplit: false,
    sourcemap: true,
    minify: 'esbuild',
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@radix-ui/react-checkbox',
        '@radix-ui/react-dialog',
        '@radix-ui/react-radio-group',
        '@radix-ui/react-switch',
        '@radix-ui/react-tooltip',
        '@radix-ui/react-tabs',
        'radix-ui',
        'sonner',
        'clsx',
        'tailwind-merge',
        'tailwind-variants',
        'react-icons',
        'react-icons/md',
      ],
      output: [
        {
          format: 'es',
          dir: 'dist',
          entryFileNames: 'index.js',
          chunkFileNames: 'chunks/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith('.css')) return 'index.css';
            return 'assets/[name][extname]';
          },
          preserveModules: false,
          exports: 'named',
          interop: 'auto',
        },
        {
          format: 'cjs',
          dir: 'dist/cjs',
          entryFileNames: 'index.cjs',
          exports: 'named',
          interop: 'auto',
        },
        {
          format: 'es',
          dir: 'dist/esm',
          entryFileNames: '[name].js',
          chunkFileNames: 'chunks/[name]-[hash].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
          exports: 'named',
          interop: 'auto',
        },
      ],
    },
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
});
