import type { ObjectId } from 'bson';

type ConditionalPath<K extends number | string, V, U> = V extends U ? `${K}` : DefaultPath<K, V, never>;
type DefaultPath<K extends number | string, V, RK = `${K}`> = V extends TerminalType ? RK : `${K}.${FilteredKeyPath<V>}`;
type IsTuple<T extends ReadonlyArray<any>> = number extends T['length'] ? false : true;
type PathImpl<K extends string | number, V, U> = [U] extends [never] ? DefaultPath<K, V> : ConditionalPath<K, V, U>;
type TerminalType = RegExp | Date | File | Blob | string | number | bigint | boolean | symbol | null | undefined | ObjectId;
type TupleKey<T extends ReadonlyArray<any>> = Exclude<keyof T, keyof any[]>;

declare global {
	/**
	 * A dictionary type that maps string keys to values of type T.
	 *
	 * @template T - The type of the values in the dictionary.
	 */
	type Dict<T> = Record<string, T>;

	/**
	 * A utility type that generates a union of key paths from a given object type `T`,
	 * filtered by a specific type `U`. If `U` is
	 * not provided, it defaults to including all key paths.
	 *
	 * @template T - The object type to traverse.
	 * @template U - The type used to filter key paths. Defaults to `never`, meaning no filtering.
	 */
	type FilteredKeyPath<T, U = never> =
		T extends ReadonlyArray<infer V> ? (IsTuple<T> extends true ? { [K in TupleKey<T>]-?: PathImpl<Exclude<K, symbol>, T[K], U> }[TupleKey<T>] : PathImpl<number, V, U>) : { [K in keyof T]-?: PathImpl<Exclude<K, symbol>, T[K], U> }[keyof T];

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

export {};
