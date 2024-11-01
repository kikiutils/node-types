export type {} from './utils/filtered-key-path';

declare global {
	/**
	 * A dictionary type that maps string keys to values of type T.
	 *
	 * @template T - The type of the values in the dictionary.
	 */
	type Dict<T> = Record<string, T>;

	/**
	 * A type that represents either a value of type T or null.
	 *
	 * @template T - The type of the value.
	 */
	type Nullable<T> = T | null;

	/**
	 * A type that represents either a number or null.
	 */
	type NullableNumber = Nullable<number>;

	/**
	 * A type that represents either a string or null.
	 */
	type NullableString = Nullable<string>;
	type PartialDict<T> = Partial<Dict<T>>;
	type PartialRecord<K extends keyof any, T> = Partial<Record<K, T>>;

	/**
	 * @deprecated Using `Promisable` provided by type-fest.
	 */
	type Promiseable<T> = T | Promise<T>;
	type Readonlyable<T> = T | Readonly<T>;
	type ReadonlyDict<T> = Readonly<Dict<T>>;
	type ReadonlyRecord<K extends keyof any, T> = Readonly<Record<K, T>>;

	/**
	 * A type that represents either a value of type T or undefined.
	 *
	 * @template T - The type of the value.
	 */
	type Undefinedable<T> = T | undefined;

	/**
	 * A type that represents either a number or undefined.
	 */
	type UndefinedableNumber = Undefinedable<number>;

	/**
	 * A type that represents either a string or undefined.
	 */
	type UndefinedableString = Undefinedable<string>;

	/**
	 * A type that represents either a value of type T or undefined.
	 *
	 * @deprecated Use @see {@link Undefinedable} instead.
	 *
	 * @template T - The type of the value.
	 */
	type UndefinedAble<T> = T | undefined;

	/**
	 * A type that represents either a number or undefined.
	 *
	 * @deprecated Use @see {@link UndefinedableNumber} instead.
	 */
	type UndefinedAbleNumber = UndefinedAble<number>;

	/**
	 * A type that represents either a string or undefined.
	 *
	 * @deprecated Use @see {@link UndefinedableString} instead.
	 */
	type UndefinedAbleString = UndefinedAble<string>;
}
