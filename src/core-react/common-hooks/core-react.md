# Deep Dive: How React and the Virtual DOM Work

## Core Concept

React uses a **Virtual DOM (VDOM)** to manage UI updates efficiently.

The **Virtual DOM** is an in-memory, lightweight JavaScript representation of the real DOM.

---

## React Update Cycle

### When state or props change:

1. **Re-render**  
   React re-executes the component function to produce new React elements.

2. **Virtual DOM Tree Construction**  
   React constructs a new Virtual DOM tree (JS object structure).

3. **Diffing Algorithm**  
   React compares the new VDOM with the previous one using an efficient diffing algorithm.

4. **Reconciliation**  
   React determines the **minimum number of updates** required to sync the real DOM with the new VDOM.

5. **Commit Phase**  
   React applies the calculated changes to the real DOM in a batched, optimized way.

---

## Example

```tsx
const [count, setCount] = useState(0);
return <h1>{count}</h1>;
```

On setCount(1):

React builds a new VDOM: <h1>1</h1>

Diffs with previous: <h1>0</h1>

Determines only text changed → updates only the text node in the real DOM

---

## Why Not Update DOM Immediately?

1. Real DOM is slow to manipulate.
2. Triggers reflows/repaints on each change.
3. Inefficient for large or frequent updates.
4. Batching is impossible without VDOM.
