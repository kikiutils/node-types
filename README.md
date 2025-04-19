# @kikiutils/types

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
<!-- [![codecov][codecov-src]][codecov-href] -->
[![License][license-src]][license-href]

Lightweight utility types package with global declarations, Vue support, and no import required.

- [✨ Release Notes](./CHANGELOG.md)

## Features

- 🛠 Provides commonly used or simplified utility types
- 🌍 Declares types globally via `declare global`, no imports needed
- 📦 Mounts select `type-fest` types to the global scope
- 🧩 Includes Vue component instance-related types

## Installation

Using [pnpm](https://pnpm.io):

```bash
pnpm add -D @kikiutils/types
```

You can also use `yarn`, `npm`, or `bun`.

## Usage

Load the types in any `.ts` or `.d.ts` file — only once is needed:

```typescript
import type {} from '@kikiutils/types';
import type {} from '@kikiutils/types/vue';
// Or
export type {} from '@kikiutils/types';
export type {} from '@kikiutils/types/vue';
```

You can load only the types you need.

> [!IMPORTANT]
> Make sure this file is located within a path included in the `include` field of your `tsconfig.json`.

## Types

### [index](./src/index.ts)

The index file includes both utility types and `type-fest` types.

- `Dict`
- `Nullable`
- `NullableNumber`
- `NullableString`
- `PartialDict`
- `PartialRecord`
- `Readonlyable`
- `ReadonlyDict`
- `ReadonlyPartialRecord`
- `ReadonlyRecord`

### [type-fest](./src/type-fest.ts)

- `Arrayable`
- `Except`
- `Promisable`
- `ReadonlyDeep`
- `SetOptional`
- `SetRequired`

### [utils](./src/utils)

- `FilteredKeyPath`

### [vue](./src/vue.ts)

- `ComponentRef`

## License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-href]: https://npmjs.com/package/@kikiutils/types
[npm-version-src]: https://img.shields.io/npm/v/@kikiutils/types/latest.svg?style=flat&colorA=18181B&colorB=28CF8D

[npm-downloads-href]: https://npmjs.com/package/@kikiutils/types
[npm-downloads-src]: https://img.shields.io/npm/dm/@kikiutils/types.svg?style=flat&colorA=18181B&colorB=28CF8D

<!-- [codecov-href]: https://codecov.io/gh/kikiutils/node-types
[codecov-src]: https://codecov.io/gh/kikiutils/node-types/graph/badge.svg?token=RNU7FNG8HD -->

[license-href]: https://github.com/kikiutils/node-types/blob/main/LICENSE
[license-src]: https://img.shields.io/npm/l/@kikiutils/types.svg?style=flat&colorA=18181B&colorB=28CF8D
