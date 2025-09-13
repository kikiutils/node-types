import type {
    Arrayable as TArrayable,
    Promisable as TPromisable,
    ReadonlyDeep as TReadonlyDeep,
    SetOptional as TSetOptional,
    SetRequired as TSetRequired,
} from 'type-fest';

declare global {
    /**
     * @see {@link TArrayable}
     */
    type Arrayable<T> = TArrayable<T>;

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
