import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/Paper.tsx', 'src/jsonify.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    sourcemap: true,
    external: ['react', 'react-dom', 'styled-components']
});