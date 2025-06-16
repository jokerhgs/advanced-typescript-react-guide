## Challenge: Toggle Favorite with useCallback

### Objective

Create a component that displays a list of items, each with a "Favorite" toggle button. Use `useCallback` to memoize the toggle handler and prevent unnecessary re-renders of child components.

---

### Requirements

- Create a component called `FavoriteList`.

- Maintain a list of items in state. Each item should have:

  - An `id` (string or number)
  - A `name` (string)
  - A `favorite` boolean

- Display the list with each item showing its name and a "Favorite"/"Unfavorite" button.

- Clicking the button should toggle the `favorite` status for that item.

- Create a memoized child component `FavoriteItem` that:

  - Receives the item and the toggle function as props.
  - Renders the name and the toggle button.

- Use `useCallback` to memoize the toggle handler per item (or a general handler using `id`) to avoid re-renders.
