# @kikiutils/types

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
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

- `AnyRecord`
- `BinaryInput`
- `Dict`
- `MaybeReadonly`
- `Nullable`
- `PartialDict`
- `PartialRecord`
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

- `Booleanish`
- `ComponentRef`
- `Numberish`
- `ShallowUnwrapRef`
- `UnwrapNestedRefs`
- `UnwrapRef`

## License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-href]: https://npmjs.com/package/@kikiutils/types
[npm-version-src]: https://img.shields.io/npm/v/@kikiutils/types/latest.svg?colorA=18181b&colorB=28cf8d&style=flat

[npm-downloads-href]: https://npmjs.com/package/@kikiutils/types
[npm-downloads-src]: https://img.shields.io/npm/dm/@kikiutils/types.svg?colorA=18181b&colorB=28cf8d&style=flat

[license-href]: https://github.com/kikiutils/node-types/blob/main/LICENSE
[license-src]: https://img.shields.io/github/license/kikiutils/node-types?colorA=18181b&colorB=28cf8d&style=flat
