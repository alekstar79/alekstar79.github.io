# Build Configuration for ESM and CommonJS

## Project structure

```
@alekstar79/reactivity/
├── 📁 dist/                          # Built library (generated)
│   ├── index.mjs                     # ESM entry point
│   ├── index.cjs                     # CJS entry point  
│   ├── index.d.ts                    # TypeScript definitions
│   ├── reactivity.mjs                # ESM reactivity module
│   ├── reactivity.cjs                # CJS reactivity module
│   ├── reactivity.d.ts               # Reactivity types
│   ├── clone.mjs                     # ESM clone module
│   ├── clone.cjs                     # CJS clone module
│   ├── clone.d.ts                    # Clone types
│   ├── types.mjs                     # ESM types module
│   ├── types.cjs                     # CJS types module
│   └── types.d.ts                    # Common types
├── 📁 demo/                          # Demo application (generated)
│   ├── index.html                    # Main demo page
│   └── 📁 assets/
│       ├── style.css                 # Compiled styles
│       └── main.js                   # Compiled demo script
├── 📁 examples/                      # Example source files
│   ├── index.html                    # Demo HTML template
│   ├── style.css                     # Demo styles
│   ├── main.ts                       # Web demo script
│   ├── node-basic.ts                 # Node.js basic examples
│   ├── node-advanced.ts              # Node.js advanced examples
│   └── node-effect-scope.ts          # Node.js effect scope examples
├── 📁 src/                           # Library source code
│   ├── index.ts                      # Main entry point
│   ├── reactivity.ts                 # Reactive system core
│   ├── clone.ts                      # Deep clone functions
│   └── types.ts                      # TypeScript type definitions
├── 📁 __tests__/                     # Test suites
│   ├── effect.test.ts                # Effect system tests
│   ├── reactivity.test.ts            # Reactivity core tests
│   ├── watch.test.ts                 # Watch function tests
│   ├── computed.test.ts              # Computed values tests
│   ├── clone.test.ts                 # Clone function tests
│   └── utils.test.ts                 # Utility functions tests
├── 📄 build-lib.js                   # Library build script
├── 📄 build-demo.js                  # Demo build script
├── 📄 package.json                   # NPM configuration
├── 📄 tsconfig.json                  # TypeScript configuration
├── 📄 README.md                      # Documentation
└── 📄 LICENSE.md                     # License file
```

## Commands to build

```bash
# Development (watch mode)
npm run dev

# Full build (ESM + CJS + TypeScript definitions)
npm run build

# Library only
npm run build:lib

# Demo only
npm run build:demo

# Type checking without build
npm run type-check

# Run examples
npm run example:basic
npm run example:advanced
npm run example:effect-scope
npm run example:all
```

## Usage in different environments

### Node.js (CommonJS)
```javascript
const { ref, watch, reactive } = require('@alekstar79/reactivity')

const count = ref(0);
watch(count, (newVal) => {
  console.log('Changed:', newVal);
});
count.value = 1;
```

### Node.js (ESM)
```javascript
import { ref, watch, reactive } from '@alekstar79/reactivity'

const count = ref(0);
watch(count, (newVal) => {
  console.log('Changed:', newVal)
})
count.value = 1
```

### Browser (ESM)
```html
<script type="module">
  import { ref, watch } from '@alekstar79/reactivity'
  
  const count = ref(0)
  watch(count, (newVal) => {
    console.log('Changed:', newVal)
  })
  count.value = 1
</script>
```

### TypeScript
```typescript
import type { Ref, WatchCallback } from '@alekstar79/reactivity'
import { ref, watch } from '@alekstar79/reactivity'

const count: Ref<number> = ref(0)

const callback: WatchCallback<number> = (newVal, oldVal) => {
  console.log(`Changed from ${oldVal} to ${newVal}`)
}

watch(count, callback)
count.value = 1
```

## Build and exports

### package.json exports

```json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs"
    },
    "./reactivity": {
      "types": "./dist/reactivity.d.ts",
      "import": "./dist/reactivity.mjs",
      "require": "./dist/reactivity.cjs"
    }
  }
}
```

Tish allows you to use:
- `import * as reactivity from '@alekstar79/reactivity'` (ESM)
- `const reactivity = require('@alekstar79/reactivity')` (CJS)

## The build process

1. **TypeScript Compilation** (build:tsc)
   - Compiles .ts files to .js
   - Generates .d.ts type definitions
   - Creates source maps

2. **ESM Build** (build:esm)
   - Renames .js files to .mjs
   - Preserves ESM module system

3. **CJS Build** (build:cjs)
   - Uses esbuild to convert to CommonJS
   - Creates .cjs files
   - Generates source maps


## Output formats

### dist/index.mjs (ESM)
```typescript
export { ref, watch, reactive, computed, effect, batch }
export type { Ref, WatchCallback, /* ... */ }
```

### dist/index.cjs (CommonJS)
```javascript
module.exports = {
  ref, watch, reactive, computed, effect, batch
}
```

### dist/index.d.ts (TypeScript definitions)
```typescript
export { ref, watch, reactive, computed, effect, batch }
export type { Ref, WatchCallback, /* ... */ }
```

## Install dependencies

```bash
npm install
```

## Tree-shaking

The export structure allows bundlers (webpack, vite, rollup) to remove unused code using ES modules.

```javascript
// Tree-shaking is used
import { ref } from '@alekstar79/reactivity'
// watch, reactive, and other things will not be included in the bundle
```
