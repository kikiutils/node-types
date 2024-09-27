export type * from './utils/filtered-key-path';

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

	type ReadonlyDict<T> = Readonly<Dict<T>>;
	type ReadonlyRecord<K extends keyof any, T> = Readonly<Record<K, T>>;

	/**
	 * A type that represents either a value of type T or undefined.
	 *
	 * @template T - The type of the value.
	 */
	type UndefinedAble<T> = T | undefined;

	/**
	 * A type that represents either a number or undefined.
	 */
	type UndefinedAbleNumber = UndefinedAble<number>;

	/**
	 * A type that represents either a string or undefined.
	 */
	type UndefinedAbleString = UndefinedAble<string>;

	/**
	 * A type that represents either a value of type T or undefined.
	 *
	 * @template T - The type of the value.
	 * @deprecated Use `UndefinedAble<T>` instead.
	 */
	type Undefinedable<T> = T | undefined;

	/**
	 * A type that represents either a number or undefined.
	 *
	 * @deprecated Use `UndefinedAbleNumber` instead.
	 */
	type UndefinedableNumber = UndefinedAble<number>;

	/**
	 * A type that represents either a string or undefined.
	 *
	 * @deprecated Use `UndefinedAbleString` instead.
	 */
	type UndefinedableString = UndefinedAble<string>;
}
