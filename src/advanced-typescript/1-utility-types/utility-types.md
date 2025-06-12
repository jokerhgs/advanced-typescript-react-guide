## TypeScript Utility Types

| Utility                    | Purpose                                                                 |
| -------------------------- | ----------------------------------------------------------------------- |
| `Partial<T>`               | Makes all properties in `T` optional.                                   |
| `Required<T>`              | Makes all properties in `T` required.                                   |
| `Readonly<T>`              | Makes all properties in `T` immutable.                                  |
| `Record<K, T>`             | Constructs an object type with keys `K` and values `T`.                 |
| `Pick<T, K>`               | Selects a subset of properties `K` from type `T`.                       |
| `Omit<T, K>`               | Removes specific properties `K` from type `T`.                          |
| `Exclude<T, U>`            | Excludes from `T` those types that are assignable to `U`.               |
| `Extract<T, U>`            | Extracts from `T` those types that are assignable to `U`.               |
| `NonNullable<T>`           | Removes `null` and `undefined` from `T`.                                |
| `Parameters<T>`            | Gets the parameter types of a function type as a tuple.                 |
| `ConstructorParameters<T>` | Gets the parameter types of a class constructor as a tuple.             |
| `ReturnType<T>`            | Gets the return type of a function.                                     |
| `InstanceType<T>`          | Gets the instance type of a class constructor.                          |
| `ThisParameterType<T>`     | Extracts the type of the `this` parameter for a function.               |
| `OmitThisParameter<T>`     | Removes the `this` parameter from a function type.                      |
| `ThisType<T>`              | Provides a `this` context type in object literals (used for inference). |
| `Awaited<T>`               | Unwraps the resolved type of a `Promise`.                               |
