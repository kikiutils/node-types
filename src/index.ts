export type {} from './type-fest';
export type {} from './utils/filtered-key-path';

declare global {
    type Dict<T> = Record<string, T>;
    type Nullable<T> = null | T;
    type NullableNumber = Nullable<number>;
    type NullableString = Nullable<string>;
    type PartialDict<T> = Partial<Dict<T>>;
    type PartialRecord<K extends keyof any, T> = Partial<Record<K, T>>;
    type Readonlyable<T> = Readonly<T> | T;
    type ReadonlyDict<T> = Readonly<Dict<T>>;
    type ReadonlyPartialRecord<K extends keyof any, T> = Readonly<PartialRecord<K, T>>;
    type ReadonlyRecord<K extends keyof any, T> = Readonly<Record<K, T>>;
}
