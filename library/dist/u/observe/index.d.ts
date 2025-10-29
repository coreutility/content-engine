type ChangeCallback = (path: string, key: PropertyKey, oldValue: any, newValue: any) => void;
/**
 * Recursively creates a Proxy for an object to observe deep changes.
 * @param target The object or array to observe.
 * @param onChange The callback function to execute on change or deletion.
 * @param path The current path (used for internal recursion).
 */
declare function index<T extends object>(target: T, onChange: ChangeCallback, path?: string): T;
export { index as createObserver };
