# Changelog

## v5.4.0

[compare changes](https://github.com/kikiutils/node-types/compare/v5.3.0...v5.4.0)

### 🚀 Enhancements

- Add `BinaryInput` type ([50d86c0](https://github.com/kikiutils/node-types/commit/50d86c0))

### 🏡 Chore

- Set `--max-warnings=0` for `lint` and `lint:fix` ([bffe476](https://github.com/kikiutils/node-types/commit/bffe476))
- Set eslint config to enable `lib` mode ([59e03e4](https://github.com/kikiutils/node-types/commit/59e03e4))
- Disable `ts/explicit-function-return-type` eslint rule ([5190f6b](https://github.com/kikiutils/node-types/commit/5190f6b))
- Lint code ([f8f0974](https://github.com/kikiutils/node-types/commit/f8f0974))
- **test:** Migrate from `jest` to `vitest` ([9a9d869](https://github.com/kikiutils/node-types/commit/9a9d869))
- Split `tsconfig` and create build-specific config for production builds ([564b6d2](https://github.com/kikiutils/node-types/commit/564b6d2))
- **vitest:** Configure coverage to collect files only under `src/` ([e2c7f65](https://github.com/kikiutils/node-types/commit/e2c7f65))
- Upgrade dependencies and remove `@types/node` ([32aaf31](https://github.com/kikiutils/node-types/commit/32aaf31))
- Update package.json ([022366d](https://github.com/kikiutils/node-types/commit/022366d))
- Wrap all variable expansions in scripts with `${}` ([82c47c9](https://github.com/kikiutils/node-types/commit/82c47c9))
- Update dependencies and modify scripts ([374cc56](https://github.com/kikiutils/node-types/commit/374cc56))
- Upgrade dependencies ([1b1d7ec](https://github.com/kikiutils/node-types/commit/1b1d7ec))

### ✅ Tests

- Change vitest config file to mjs ([5c3bc1f](https://github.com/kikiutils/node-types/commit/5c3bc1f))

### 🤖 CI

- Set `--prod=false` when install dependencies ([93d7945](https://github.com/kikiutils/node-types/commit/93d7945))
- Remove `--prod=false` flag when install dependencies ([249def0](https://github.com/kikiutils/node-types/commit/249def0))

### ❤️ Contributors

- kiki-kanri

## v5.3.0

[compare changes](https://github.com/kikiutils/node-types/compare/v5.2.0...v5.3.0)

### 🚀 Enhancements

- Add `AnyRecord` type ([92cc269](https://github.com/kikiutils/node-types/commit/92cc269))

### 📖 Documentation

- Update README badges urls ([499bc71](https://github.com/kikiutils/node-types/commit/499bc71))
- Replace `%2F` with `/` in badge URLs in README ([4aaf916](https://github.com/kikiutils/node-types/commit/4aaf916))

### 🏡 Chore

- Add option to `upgrade-dependencies.sh` to clean `node_modules` and `pnpm-lock.yaml` before upgrading ([e542b14](https://github.com/kikiutils/node-types/commit/e542b14))
- Upgrade dependencies ([d3ee5a7](https://github.com/kikiutils/node-types/commit/d3ee5a7))
- Ensure all scripts change to their own directory before execution ([9be5fbf](https://github.com/kikiutils/node-types/commit/9be5fbf))
- Update ignore files ([c81c294](https://github.com/kikiutils/node-types/commit/c81c294))
- **scripts:** Ensure all scripts `cd` to their current directory correctly ([5362c3b](https://github.com/kikiutils/node-types/commit/5362c3b))
- Upgrade dependencies ([b900df4](https://github.com/kikiutils/node-types/commit/b900df4))
- Remove all test-related files, dependencies, and `codecov` integration ([92536ad](https://github.com/kikiutils/node-types/commit/92536ad))

### 🤖 CI

- Update test workflow ([1519e46](https://github.com/kikiutils/node-types/commit/1519e46))
- Update condition for uploading to Codecov in workflow job ([39851ac](https://github.com/kikiutils/node-types/commit/39851ac))

### ❤️ Contributors

- kiki-kanri

## v5.2.0

[compare changes](https://github.com/kikiutils/node-types/compare/v5.1.0...v5.2.0)

### 🚀 Enhancements

- Add more vue types ([f9d7a0f](https://github.com/kikiutils/node-types/commit/f9d7a0f))

### 🏡 Chore

- Update `modify-files-permissions.sh` ([89f72e3](https://github.com/kikiutils/node-types/commit/89f72e3))
- Upgrade dependencies ([ad63ec4](https://github.com/kikiutils/node-types/commit/ad63ec4))

### ❤️ Contributors

- kiki-kanri

## v5.1.0

[compare changes](https://github.com/kikiutils/node-types/compare/v5.0.1...v5.1.0)

### 🚀 Enhancements

- Add more vue types ([ea78626](https://github.com/kikiutils/node-types/commit/ea78626))

### 🏡 Chore

- Enable `isolatedDeclarations` in tsconfig ([9e5db48](https://github.com/kikiutils/node-types/commit/9e5db48))
- Remove `pnpm-workspace.yaml` and configure `pnpm.onlyBuiltDependencies` in package.json ([634666d](https://github.com/kikiutils/node-types/commit/634666d))
- Format script ([16ca049](https://github.com/kikiutils/node-types/commit/16ca049))
- Update file permissions after installing or updating dependencies ([d141f76](https://github.com/kikiutils/node-types/commit/d141f76))
- Add `--hideAuthorEmail` flag to bumplog command ([382091b](https://github.com/kikiutils/node-types/commit/382091b))
- Add typecheck command to package.json scripts ([2a1f7e0](https://github.com/kikiutils/node-types/commit/2a1f7e0))
- Update dependencies ([24a1ac4](https://github.com/kikiutils/node-types/commit/24a1ac4))
- Rename `jest.config.js` to `jest.config.mjs` ([76371a1](https://github.com/kikiutils/node-types/commit/76371a1))
- Reorder lint, test, and build steps in release command ([b63dcb4](https://github.com/kikiutils/node-types/commit/b63dcb4))
- Add and update configurations for future test setups ([bdc965f](https://github.com/kikiutils/node-types/commit/bdc965f))
- Disable `isolatedDeclarations` in tsconfig ([ed1636f](https://github.com/kikiutils/node-types/commit/ed1636f))
- Upgrade dependencies ([8332cde](https://github.com/kikiutils/node-types/commit/8332cde))

### ✅ Tests

- Add pass test unit ([d7b98bd](https://github.com/kikiutils/node-types/commit/d7b98bd))

### 🤖 CI

- Add test github workflow config file ([dd421d1](https://github.com/kikiutils/node-types/commit/dd421d1))

### ❤️ Contributors

- kiki-kanri

## v5.0.1

[compare changes](https://github.com/kikiutils/node-types/compare/v5.0.0...v5.0.1)

### 📖 Documentation

- Update package description and keywords ([25d8eea](https://github.com/kikiutils/node-types/commit/25d8eea))

### 🏡 Chore

- Add `prepack` script to package.json ([30b1bce](https://github.com/kikiutils/node-types/commit/30b1bce))
- Update dependencies ([0f3e05d](https://github.com/kikiutils/node-types/commit/0f3e05d))

### ❤️ Contributors

- kiki-kanri

## v5.0.0

[compare changes](https://github.com/kikiutils/node-types/compare/v4.1.0...v5.0.0)

### 🚀 Enhancements

- Import type-fest types in entry point ([3a75ba3](https://github.com/kikiutils/node-types/commit/3a75ba3))
- Add `ReadonlyPartialRecord` type ([a54e5a3](https://github.com/kikiutils/node-types/commit/a54e5a3))
- Add `ReadonlyDeep` type-fest type ([508eb92](https://github.com/kikiutils/node-types/commit/508eb92))

### 💅 Refactors

- ⚠️ Remove `Undefinedable` related types and normal type comments ([9b4a79c](https://github.com/kikiutils/node-types/commit/9b4a79c))

### 📖 Documentation

- Add CHANGELOG ([e2a7879](https://github.com/kikiutils/node-types/commit/e2a7879))
- Add `ComponentRef` type example ([1ac2480](https://github.com/kikiutils/node-types/commit/1ac2480))
- Update README, package.json description, and keywords ([06d0c9f](https://github.com/kikiutils/node-types/commit/06d0c9f))

### 📦 Build

- ⚠️ Update packaging method and structure ([2997cbd](https://github.com/kikiutils/node-types/commit/2997cbd))
- Update build-related configurations ([74bf88c](https://github.com/kikiutils/node-types/commit/74bf88c))

### 🏡 Chore

- Upgrade dependencies ([ad03179](https://github.com/kikiutils/node-types/commit/ad03179))

#### ⚠️ Breaking Changes

- ⚠️ Remove `Undefinedable` related types and normal type comments ([9b4a79c](https://github.com/kikiutils/node-types/commit/9b4a79c))
- ⚠️ Update packaging method and structure ([2997cbd](https://github.com/kikiutils/node-types/commit/2997cbd))

### ❤️ Contributors

- kiki-kanri

## v4.1.0

[compare changes](https://github.com/kikiutils/node-types/compare/v4.0.0...v4.1.0)

### 🚀 Enhancements

- Type-fest file add SetOptional and SetRequired types ([1c2c906](https://github.com/kikiutils/node-types/commit/1c2c906))

### 🩹 Fixes

- Correct misuse of type-fest types that caused missing or any type definitions ([95c765e](https://github.com/kikiutils/node-types/commit/95c765e))

### 🏡 Chore

- Upgrade dependencies ([d00659e](https://github.com/kikiutils/node-types/commit/d00659e))
- Format code ([b84eaf8](https://github.com/kikiutils/node-types/commit/b84eaf8))

### ❤️ Contributors

- kiki-kanri

## v4.0.0

[compare changes](https://github.com/kikiutils/node-types/compare/v3.2.2...v4.0.0)

### 💅 Refactors

- ⚠️ Remove deprecated codes ([e6ebc6f](https://github.com/kikiutils/node-types/commit/e6ebc6f))

### 🏡 Chore

- Upgrade dependencies ([7dd97b1](https://github.com/kikiutils/node-types/commit/7dd97b1))
- Upgrade dependencies ([90cb7b5](https://github.com/kikiutils/node-types/commit/90cb7b5))
- Update repository URL ([a021709](https://github.com/kikiutils/node-types/commit/a021709))

### 🎨 Styles

- Format and lint all files ([b1efd6b](https://github.com/kikiutils/node-types/commit/b1efd6b))
- Format script ([f780574](https://github.com/kikiutils/node-types/commit/f780574))

#### ⚠️ Breaking Changes

- ⚠️ Remove deprecated codes ([e6ebc6f](https://github.com/kikiutils/node-types/commit/e6ebc6f))

### ❤️ Contributors

- kiki-kanri

## v3.2.2

[compare changes](https://github.com/kikiutils/node-types/compare/v3.2.1...v3.2.2)

### 🏡 Chore

- Update eslint-config and format codes ([8769c04](https://github.com/kikiutils/node-types/commit/8769c04))

### ❤️ Contributors

- kiki-kanri

## v3.2.1

[compare changes](https://github.com/kikiutils/node-types/compare/v3.2.0...v3.2.1)

### 📖 Documentation

- Modify comments to prevent inappropriate type annotations ([8925ce4](https://github.com/kikiutils/node-types/commit/8925ce4))

### 🏡 Chore

- Upgrade dependencies ([2a33f7f](https://github.com/kikiutils/node-types/commit/2a33f7f))
- Replace Prettier with ESLint, add related files, and update VSCode settings ([e6694f4](https://github.com/kikiutils/node-types/commit/e6694f4))
- Modify scripts in package.json ([b32cf13](https://github.com/kikiutils/node-types/commit/b32cf13))

### 🎨 Styles

- Format and lint all files ([5662e9c](https://github.com/kikiutils/node-types/commit/5662e9c))

### ❤️ Contributors

- kiki-kanri

## v3.2.0

[compare changes](https://github.com/kikiutils/node-types/compare/v3.1.1...v3.2.0)

### 🚀 Enhancements

- Add file to convert some type-fest types to global types ([2a56b98](https://github.com/kikiutils/node-types/commit/2a56b98))
- Add Readonlyable type ([e78ca8d](https://github.com/kikiutils/node-types/commit/e78ca8d))

### 📖 Documentation

- Update README ([0e2b8ff](https://github.com/kikiutils/node-types/commit/0e2b8ff))
- Update deprecated types annotations ([5b29525](https://github.com/kikiutils/node-types/commit/5b29525))

### 🏡 Chore

- Mark Promiseable as deprecated ([c9c979f](https://github.com/kikiutils/node-types/commit/c9c979f))
- Upgrade dependencies ([d84006c](https://github.com/kikiutils/node-types/commit/d84006c))

### ❤️ Contributors

- kiki-kanri

## v3.1.1

[compare changes](https://github.com/kikiutils/node-types/compare/v3.1.0...v3.1.1)

### 📖 Documentation

- Update README ([9cc3b09](https://github.com/kikiutils/node-types/commit/9cc3b09))

### ❤️ Contributors

- kiki-kanri

## v3.1.0

[compare changes](https://github.com/kikiutils/node-types/compare/v3.0.0...v3.1.0)

### 🚀 Enhancements

- Add Promiseable type ([a926a81](https://github.com/kikiutils/node-types/commit/a926a81))

### 🩹 Fixes

- Add new types for correcting naming and deprecate old types ([5fb831e](https://github.com/kikiutils/node-types/commit/5fb831e))

### 🏡 Chore

- Modify tsconfig.json ([caff8e8](https://github.com/kikiutils/node-types/commit/caff8e8))
- Add release script to package.json and install dependencies ([7b2ba4a](https://github.com/kikiutils/node-types/commit/7b2ba4a))

### 🎨 Styles

- Reorder badge URLs in README ([fd0bdf3](https://github.com/kikiutils/node-types/commit/fd0bdf3))

### ❤️ Contributors

- kiki-kanri

## v3.0.0

[compare changes](https://github.com/kikiutils/node-types/compare/v2.2.1...v3.0.0)

### 🚀 Enhancements

- Add PartialDict and PartialRecord types ([bbede38](https://github.com/kikiutils/node-types/commit/bbede38))

### 📖 Documentation

- Update README ([16260ea](https://github.com/kikiutils/node-types/commit/16260ea))

### 🏡 Chore

- ⚠️ Remove deprecated types ([d364f2a](https://github.com/kikiutils/node-types/commit/d364f2a))
- Upgrade dependencies ([dbc6154](https://github.com/kikiutils/node-types/commit/dbc6154))

#### ⚠️ Breaking Changes

- ⚠️ Remove deprecated types ([d364f2a](https://github.com/kikiutils/node-types/commit/d364f2a))

### ❤️ Contributors

- kiki-kanri

## v2.2.1

[compare changes](https://github.com/kikiutils/node-types/compare/v2.2.0...v2.2.1)

### 🩹 Fixes

- Correct type issue in FilteredKeyPath ([bc23f6d](https://github.com/kikiutils/node-types/commit/bc23f6d))

### ❤️ Contributors

- kiki-kanri

## v2.2.0

[compare changes](https://github.com/kikiutils/node-types/compare/v2.1.0...v2.2.0)

### 🚀 Enhancements

- Add ReadonlyDict and ReadonlyRecord types ([8255a5b](https://github.com/kikiutils/node-types/commit/8255a5b))

### ❤️ Contributors

- kiki-kanri

## v2.1.0

[compare changes](https://github.com/kikiutils/node-types/compare/v2.0.1...v2.1.0)

### 🚀 Enhancements

- Add bson dependency ([982d049](https://github.com/kikiutils/node-types/commit/982d049))
- Add FilteredKeyPath type ([1cb02bc](https://github.com/kikiutils/node-types/commit/1cb02bc))

### 💅 Refactors

- Split files into src directory ([8fe5bea](https://github.com/kikiutils/node-types/commit/8fe5bea))

### 🏡 Chore

- Update build and packaging process ([14b539d](https://github.com/kikiutils/node-types/commit/14b539d))

### ❤️ Contributors

- kiki-kanri

## v2.0.1

[compare changes](https://github.com/kikiutils/node-types/compare/v2.0.0...v2.0.1)

### 🩹 Fixes

- Correct incorrect export declare global syntax ([7f0e543](https://github.com/kikiutils/node-types/commit/7f0e543))
- Correct typo in Undefinedable type ([c8b3700](https://github.com/kikiutils/node-types/commit/c8b3700))

### 📖 Documentation

- Update README ([7f0377f](https://github.com/kikiutils/node-types/commit/7f0377f))

### ❤️ Contributors

- kiki-kanri

## v2.0.0

[compare changes](https://github.com/kikiutils/node-types/compare/v1.0.1...v2.0.0)

### 💅 Refactors

- ⚠️ Move nuxt types to vue.d.ts ([27710f4](https://github.com/kikiutils/node-types/commit/27710f4))

### 📖 Documentation

- Update README and package.json ([b6436ff](https://github.com/kikiutils/node-types/commit/b6436ff))

### 🏡 Chore

- Remove redundant tsconfig options ([611fc91](https://github.com/kikiutils/node-types/commit/611fc91))
- Update .gitignore ([ebb5f3a](https://github.com/kikiutils/node-types/commit/ebb5f3a))
- Upgrade dependencies ([7342af6](https://github.com/kikiutils/node-types/commit/7342af6))
- Move utils types to root directory and rename to index.d.ts ([4d2ca62](https://github.com/kikiutils/node-types/commit/4d2ca62))

#### ⚠️ Breaking Changes

- ⚠️ Move nuxt types to vue.d.ts ([27710f4](https://github.com/kikiutils/node-types/commit/27710f4))

### ❤️ Contributors

- kiki-kanri

## v1.0.1

[compare changes](https://github.com/kikiutils/node-types/compare/v1.0.0...v1.0.1)

### 🩹 Fixes

- Ensure Nuxt types can be imported independently ([ecbdb58](https://github.com/kikiutils/node-types/commit/ecbdb58))

### 🏡 Chore

- Add prettier ([bf0a4ef](https://github.com/kikiutils/node-types/commit/bf0a4ef))
- Upgrade dependencies ([26061a2](https://github.com/kikiutils/node-types/commit/26061a2))
- Remove and update fields in package.json ([1cac968](https://github.com/kikiutils/node-types/commit/1cac968))

### ❤️ Contributors

- kiki-kanri

## v1.0.0

[compare changes](https://github.com/kikiutils/node-types/compare/v0.1.0...v1.0.0)

### 🩹 Fixes

- Dict key type it should all be string ([b930bd3](https://github.com/kikiutils/node-types/commit/b930bd3))

### 🏡 Chore

- Move nuxt dir to top ([183b8a8](https://github.com/kikiutils/node-types/commit/183b8a8))

### ❤️ Contributors

- kiki-kanri

## v0.1.0

[compare changes](https://github.com/kikiutils/node-types/compare/be820b4...v0.1.0)

### 🚀 Enhancements

- Add nuxt components and utils types ([4da6cab](https://github.com/kikiutils/node-types/commit/4da6cab))

### 🏡 Chore

- Add gitignore and readme ([05e16a7](https://github.com/kikiutils/node-types/commit/05e16a7))
- Add package.json and tsconfig.json ([2ac94ca](https://github.com/kikiutils/node-types/commit/2ac94ca))

### ❤️ Contributors

- kiki-kanri
