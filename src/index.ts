import type {
    Buffer,
    Blob as NodeBlob,
    File as NodeFile,
} from 'node:buffer';

export type {} from './type-fest';
export type {} from './utils/filtered-key-path';

declare global {
    type AnyRecord = Record<string, any>;
    type BinaryInput = Blob | Buffer | File | NodeBlob | NodeFile;
    type Dict<T> = Record<string, T>;
    type MaybeReadonly<T> = Readonly<T> | T;
    type Nullable<T> = null | T;
    type NullableNumber = Nullable<number>;
    type NullableString = Nullable<string>;
    type PartialDict<T> = Partial<Dict<T>>;
    type PartialRecord<K extends keyof any, T> = Partial<Record<K, T>>;
    type ReadonlyDict<T> = Readonly<Dict<T>>;
    type ReadonlyPartialRecord<K extends keyof any, T> = Readonly<PartialRecord<K, T>>;
    type ReadonlyRecord<K extends keyof any, T> = Readonly<Record<K, T>>;
}
