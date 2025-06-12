## TypeScript: Declaration Merging

**Declaration Merging** is a TypeScript feature that allows multiple declarations with the same name to be automatically combined into a single definition. This is especially useful for extending third-party types, augmenting global objects, or enhancing existing interfaces without modifying source code.

---

### Use Cases

#### 1. Interface Merging

If two interfaces share the same name in the same scope, TypeScript merges their properties.

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

// User now has both `name` and `age` properties.
const user: User = {
  name: "Carl",
  age: 30,
};
```

---

#### 2. Extending Third-Party Modules

You can augment modules like Express or libraries like React without touching node_modules.

```ts
// Extend the Express Request type
declare module "express-serve-static-core" {
  interface Request {
    userId?: string;
  }
}

// Middleware usage
app.use((req, res, next) => {
  req.userId = "abc123"; // ✅ Type-safe
  next();
});
```

---

### 3. Merging Namespaces and Functions

You can merge a function with a namespace to simulate static methods or properties.

```ts
function Logger(message: string) {
  console.log(message);
}

namespace Logger {
  export const level = "info";
}

Logger("App started");
console.log(Logger.level); // ✅ "info"
```
