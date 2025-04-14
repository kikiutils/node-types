import type { GlobalComponents } from 'vue';

declare global {
    /**
     * A type that represents a reference to a Vue component instance.
     * The reference can be either an instance of the specified component or null.
     *
     * @template K - The key of the component in the GlobalComponents.
     *
     * @example
     * ```typescript
     * const keepAliveRef = ref<ComponentRef<'KeepAlive'>>(null);
     * ```
     */
    type ComponentRef<K extends keyof GlobalComponents> = InstanceType<GlobalComponents[K]> | null;
}
