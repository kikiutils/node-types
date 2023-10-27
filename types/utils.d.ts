export declare global {
	type Dict<T> = Record<number | string, T>;
	type Nullable<T> = T | null;
	type NullableNumber = Nullable<number>;
	type NullableString = Nullable<string>;
	type Undefinedable<T> = T | undefined;
	type UndefinedableNumber = Undefinedable<number>;
	type UndefinedableString = Undefinedable<string>;
}
