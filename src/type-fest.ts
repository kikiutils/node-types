import type TypeFest from 'type-fest';

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
     * @see {@link TypeFest.Arrayable}
     */
    type Arrayable<T> = TypeFest.Arrayable<T>;

    /**
     * @see {@link TypeFest.Except}
     */
    type Except<ObjectType, KeysType extends keyof ObjectType, Options extends ExceptOptions = { requireExactProps: false }> = TypeFest.Except<ObjectType, KeysType, Options>;

    /**
     * @see {@link TypeFest.Promisable}
     */
    type Promisable<T> = TypeFest.Promisable<T>;
}
