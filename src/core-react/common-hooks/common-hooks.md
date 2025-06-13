# React Hooks Cheatsheet

A concise reference for commonly used React hooks, with descriptions and example usage.

---

## `useState`

Manages local component state.

```js
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};
```

---

## `useEffect`

Performs side effects (e.g., data fetching, subscriptions).

```js
import { useEffect } from "react";

useEffect(() => {
  const timer = setInterval(() => console.log("Tick"), 1000);
  return () => clearInterval(timer);
}, []);
```

---

## `useContext`

Accesses values from a React context.

```js
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemedComponent = () => {
  const theme = useContext(ThemeContext);
  return <div style={{ color: theme.text }}>Hello</div>;
};
```

## `useRef`

Creates a persistent, mutable ref.

```js
import { useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef(null);
  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
};
```

## `useMemo`

Memoizes a computed value.

```js
import { useMemo } from "react";

const ExpensiveComponent = ({ a, b }) => {
  const result = useMemo(() => a + b, [a, b]);
  return <div>{result}</div>;
};
```

## `useCallback`

Memoizes a callback function.

```js
import { useCallback } from "react";

const Button = ({ onClick }) => <button onClick={onClick}>Click</button>;

const Parent = () => {
  const handleClick = useCallback(() => console.log("Clicked"), []);
  return <Button onClick={handleClick} />;
};
```

## `useReducer`

Manages state with a reducer function (useful for complex logic).

```js
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <button onClick={() => dispatch({ type: "increment" })}>
      {state.count}
    </button>
  );
};
```

## `useLayoutEffect`

Like useEffect, but runs synchronously after DOM mutations.

```js
import { useLayoutEffect, useRef } from "react";

const LayoutExample = () => {
  const divRef = useRef();

  useLayoutEffect(() => {
    console.log(divRef.current.getBoundingClientRect());
  }, []);

  return <div ref={divRef}>Measure me</div>;
};
```

## `useImperativeHandle`

Exposes imperative methods to parent via ref.

```js
import { useImperativeHandle, useRef, forwardRef } from "react";

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
  }));
  return <input ref={inputRef} />;
});
```
