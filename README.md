# @kikiutils/types

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

A versatile library of utility types for TypeScript.

## Features

- 📚 Comprehensive utility types for handling optional and nullable values
- 🧩 Seamless management of Vue component references

## Installation

Add dependency (example using pnpm).

```bash
pnpm add -D @kikiutils/types
```

You can also use yarn, npm, or bun to add the dependency.

That's it! You're ready to use this package in your project. Check out the instructions for [usage](#usage) below ✨.

## Usage

Import types in any `.ts` or `.d.ts` file under the project:

```typescript
import type {} from '@kikiutils/types';
```

> [!IMPORTANT]
> Ensure the tsconfig.json settings include the file within the compiler's resolution scope.

All types are global and can be used throughout the project after import. Check out the instructions for [types](#types) below.

# Types

- [index](./index.d.ts) (main)
  - Dict
  - Nullable
  - NullableNumber
  - NullableString
  - UndefinedAble
  - UndefinedAbleNumber
  - UndefinedAbleString

- [vue](./vue.d.ts)
  - ComponentRef

## License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@kikiutils/types/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@kikiutils/types

[npm-downloads-src]: https://img.shields.io/npm/dm/@kikiutils/types.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@kikiutils/types

[license-src]: https://img.shields.io/npm/l/@kikiutils/types.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://github.com/kiki-kanri/kikiutils-node-types/blob/main/LICENSE
