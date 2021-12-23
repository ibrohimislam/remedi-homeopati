const esbuild = require('esbuild');
const {pnpPlugin} = require('@yarnpkg/esbuild-plugin-pnp');

esbuild
  .build({
      plugins: [pnpPlugin()],
      entryPoints: ['src/index.ts'],
      outdir: 'dist',
      bundle: true,
      sourcemap: true,
      minify: true,
      splitting: true,
      format: 'esm',
      target: [
        'esnext'
      ]
  })
  .catch(() => process.exit(1));