const cache: Record<string, any> = {};

export function useOrCreate<T>(key: string, callback: () => T): T {
    if (!cache[key]) cache[key] = callback();
    return cache[key] as T;
}
