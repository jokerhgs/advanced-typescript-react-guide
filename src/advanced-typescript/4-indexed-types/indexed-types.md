# TypeScript: Indexed Access Types

Indexed types let you access the **type of a specific property** on another type. This enables you to refer to sub-types in a precise and type-safe way.

---

## What Are Indexed Access Types?

Indexed types allow you to extract the type of a property from an existing object type using `T[K]`, where:

- `T` is a type
- `K` is a key (string literal or union of keys)

### Syntax

```ts
type PropertyType = SomeType["propertyName"];
```
