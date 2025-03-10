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
import type {} from '@kikiutils/types/type-fest';
import type {} from '@kikiutils/types/vue';
```

You can omit the import if the related types are not used.

> [!IMPORTANT]
> Ensure the tsconfig.json settings include the file within the compiler's resolution scope.

All types are global and can be used throughout the project after import. Check out the instructions for [types](#types) below.

## Types

- [index](./src/index.ts) (main)
  - Dict
  - FilteredKeyPath - from [filtered-key-path](./src/utils/filtered-key-path.ts) utility
  - Nullable
  - NullableNumber
  - NullableString
  - PartialDict
  - PartialRecord
  - Readonlyable
  - ReadonlyDict
  - ReadonlyRecord
  - Undefinedable
  - UndefinedableNumber
  - UndefinedableString

- [type-fest](./src/type-fest.ts)
  - Arrayable
  - Except
  - Promisable

- [vue](./src/vue.ts)
  - ComponentRef

## License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-href]: https://npmjs.com/package/@kikiutils/types
[npm-version-src]: https://img.shields.io/npm/v/@kikiutils/types/latest.svg?style=flat&colorA=18181B&colorB=28CF8D

[npm-downloads-href]: https://npmjs.com/package/@kikiutils/types
[npm-downloads-src]: https://img.shields.io/npm/dm/@kikiutils/types.svg?style=flat&colorA=18181B&colorB=28CF8D

[license-href]: https://github.com/kikiutils/node-types/blob/main/LICENSE
[license-src]: https://img.shields.io/npm/l/@kikiutils/types.svg?style=flat&colorA=18181B&colorB=28CF8D
