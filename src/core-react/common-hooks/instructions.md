# React Hooks Mastery Challenge: Task Planner (JSON-based)

## Project Objective

Build a local, in-memory **Task Planner** using only React. The goal is to **master all core React hooks** in one structured challenge. Task data is stored in a **local JSON object managed in component state**.

---

## Project Overview

This is a self-contained task planner. Users can add, edit, delete, and filter tasks. The UI supports light/dark mode, input focus control, and dynamic layout measurements—all implemented using **React hooks** and **a local JSON structure**.

---

## Hooks to Use

| Hook                  | Required Usage                                                |
| --------------------- | ------------------------------------------------------------- |
| `useState`            | Manage JSON task list, input fields, and UI flags.            |
| `useEffect`           | Handle side effects like auto-focus or UI transitions.        |
| `useContext`          | Manage and access global theme (light/dark).                  |
| `useReducer`          | Centralize task logic (add, edit, delete, toggle).            |
| `useRef`              | Focus and control DOM elements like inputs.                   |
| `useCallback`         | Memoize functions passed to child components.                 |
| `useMemo`             | Compute filtered task lists efficiently.                      |
| `useLayoutEffect`     | Measure DOM layout after render.                              |
| `useImperativeHandle` | Expose form methods like `.clear()` and `.focus()` to parent. |

---

## Required Features

1. **Task Management (CRUD)**

   - Tasks are stored in a `useReducer` state object in JSON format.
   - Each task object should have:
     ```js
     {
       id: string,
       name: string,
       completed: boolean
     }
     ```

2. **Task Filters**

   - Filter tasks by status: All / Completed / Pending.

3. **Theme Toggle**

   - Global theme context using `useContext`.

4. **Auto-Focus & Input Control**

   - Autofocus input on form open.
   - Clear or focus the input via parent using `useImperativeHandle`.

5. **Layout Measurement**

   - Display size of task list area using `useLayoutEffect`.

6. **Render Optimization**
   - Use `React.memo`, `useMemo`, and `useCallback` to minimize unnecessary re-renders.

---

## Component Suggestions

- `App.tsx`: Root layout, wraps theme provider.
- `TaskPlanner.tsx`: Uses `useReducer` to manage task list.
- `TaskForm.tsx`: Controlled form component with imperative ref methods.
- `TaskList.tsx`: Renders list using filtered data from `useMemo`.
- `TaskItem.tsx`: Renders individual task, memoized.
- `SizeDebugger.jsx`: Shows container size using `useLayoutEffect`.

---

## Rules

- No remote API requests.
- No browser storage (`localStorage`, `sessionStorage`).
- Data exists only in local JSON state while app is running.
- Use React hooks for all logic—no external state libraries.

---

## Completion Criteria

- [ ] All hooks used appropriately and purposefully.
- [ ] Task data modeled and managed as local JSON.
- [ ] Functional and styled theme toggle.
- [ ] Clean separation of components.
- [ ] Optimized performance with memoization and callbacks.
- [ ] Responsive layout with accurate measurements.

---

## Optional Enhancements

- Add task validation (e.g., no empty titles).
- Show undo/redo using `useReducer` history pattern.
- Add visual transitions for task edits/deletes.

---

## 🧑‍💻 Start the App

```bash
npx create-react-app react-task-planner
cd react-task-planner
# Build components as described above.
npm start
```
