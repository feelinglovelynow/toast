#!/bin/bash
rm -rf ./dist ./tsc &&
pnpm tsc &&
node ./esbuild.js &&
cp ./src/index.ts ./dist/index.ts
cp ./src/index.css ./dist/index.css
cp ./src/types.d.ts ./dist/types.d.ts
