export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export function deepMerge<T extends Record<string, any>>(base: T, override: DeepPartial<T>): T {
  const result: any = Array.isArray(base) ? [...base] : { ...base };
  for (const key in override) {
    const overrideValue = (override as any)[key];
    const baseValue = (base as any)[key];
    if (
      overrideValue &&
      typeof overrideValue === 'object' &&
      !Array.isArray(overrideValue) &&
      baseValue &&
      typeof baseValue === 'object'
    ) {
      result[key] = deepMerge(baseValue, overrideValue);
    } else if (overrideValue !== undefined) {
      result[key] = overrideValue;
    }
  }
  return result;
}
