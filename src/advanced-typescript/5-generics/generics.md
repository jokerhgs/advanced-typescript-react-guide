# TypeScript: Generics

Generics in TypeScript enable the creation of reusable, type-safe components, functions, and types that work across a variety of data shapes.

## 1. Basic Generics

Basic generics introduce a type parameter <T> that allows the function or component to work with any type while preserving type safety.

```ts
function identity<T>(arg: T): T {
  return arg;
}
```

```ts
interface SelectProps<T> {
  value: T;
  options: T[];
  onChange: (val: T) => void;
}
```

## 2. Generic Constraints

Constraints limit what types T can be by requiring them to conform to a certain shape (e.g., must have a specific property).

```ts
function getId<T extends { id: string }>(item: T): string {
  return item.id;
}
```

```ts
interface ListProps<T extends { id: string }> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}
```

## 3. Default Generic Types

Default generic types allow you to specify a fallback type for a generic if none is provided.

```ts
interface SelectProps<T = string> {
  value: T;
  options: T[];
  onChange: (val: T) => void;
}
```
