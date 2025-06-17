# React Transition Challenge: Smooth Tab Switching

## Objective

Implement a tab interface with optimized transitions between text content using `useTransition`.

## Requirements

1. Create a component with three text-only tabs:

   - "Recent" (list of 10 recent items)
   - "Popular" (list of 10 popular items)
   - "Saved" (list of 10 saved items)

2. Use `useTransition` to:

   - Show "Loading..." during tab switches
   - Keep previous tab content visible while loading
   - Set a 300ms timeout for transitions

3. Basic functionality:
   - Clicking a tab shows its content
   - Active tab should be visually distinct
   - Disable tab buttons during transition
