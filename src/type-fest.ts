import type {
    Arrayable as TArrayable,
    Except as TExcept,
    Promisable as TPromisable,
    ReadonlyDeep as TReadonlyDeep,
    SetOptional as TSetOptional,
    SetRequired as TSetRequired,
} from 'type-fest';
import type { ApplyDefaultOptions } from 'type-fest/source/internal';

interface ExceptOptions {
    /**
     * Disallow assigning non-specified properties.
     *
     * Note that any omitted properties in the resulting type will be present in autocomplete as `undefined`.
     *
     * @default false
     */
    requireExactProps?: boolean;
}

declare global {
    /**
     * @see {@link TArrayable}
     */
    type Arrayable<T> = TArrayable<T>;

    /**
     * @see {@link TExcept}
     */
    type Except<
        ObjectType,
        KeysType extends keyof ObjectType,
        Options extends ExceptOptions = object,
    > = TExcept<
        ObjectType,
        KeysType,
        ApplyDefaultOptions<ExceptOptions, { requireExactProps: false }, Options>
    >;

    /**
     * @see {@link TPromisable}
     */
    type Promisable<T> = TPromisable<T>;

    /**
     * @see {@link TReadonlyDeep}
     */
    type ReadonlyDeep<T> = TReadonlyDeep<T>;

    /**
     * @see {@link TSetOptional}
     */
    type SetOptional<BaseType, Keys extends keyof BaseType> = TSetOptional<BaseType, Keys>;

    /**
     * @see {@link TSetRequired}
     */
    type SetRequired<BaseType, Keys extends keyof BaseType> = TSetRequired<BaseType, Keys>;
}
