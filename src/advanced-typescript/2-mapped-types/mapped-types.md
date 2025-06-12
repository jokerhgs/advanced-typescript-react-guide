# TypeScript: Mapped Types

Mapped types allow you to transform an existing type by iterating over its properties and applying a consistent modification.

---

## What Are Mapped Types?

A **mapped type** transforms each property of an existing type using `keyof` and a `for-in` style syntax.

### Syntax

```ts
type MyMappedType<T> = {
  [K in keyof T]: T[K];
};
```

- TypeScript includes several mapped utility types:

- `Partial<T>` – makes all properties optional

- `Readonly<T>` – makes all properties readonly

- `Required<T>` – makes all optional properties required

- `Record<K, T>` – creates a type with a set of keys K and value type T
