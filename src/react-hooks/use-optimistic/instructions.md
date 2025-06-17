## Challenge: Optimistic Comment Submission with `useOptimistic`

### Objective

Implement a simple comment form where new comments appear immediately in the UI before the server confirms them. Use the `useOptimistic` hook from React 19 to achieve this.

---

### Requirements

- Create a component called `CommentForm`.

- Maintain a list of submitted comments. Each comment should have:

  - A `text` field (string)
  - An optional `pending` flag (boolean)

- Include a text input and a "Submit" button.

- When the user submits a comment:

  - Immediately display it in the list as "pending".
  - Simulate a server confirmation with a `Promise` (e.g. `setTimeout`).
  - Once resolved, the comment should no longer be marked as pending.

- Use the `useOptimistic` hook to optimistically update the comment list.

---

### Notes

- This component should be a **Client Component** (`"use client"` directive is required).
- `useOptimistic` returns a pair:
  - `optimisticState`: the current optimistic list.
  - `addOptimistic`: a function to apply optimistic updates.
- You may simulate the server confirmation with a helper like:
  ```ts
  const submitToServer = async (text: string) => {
    await new Promise((r) => setTimeout(r, 1000));
  };
  ```
