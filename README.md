# useRouter Hook Error in Conditionally Rendered Component (Next.js 15)

This repository demonstrates a bug and its solution related to using the `useRouter` hook from `next/navigation` within a conditionally rendered component in Next.js 15.  The problem arises when the component containing the hook isn't mounted during the initial page load.  This can lead to errors because the router instance might not be fully initialized.

## Bug

The `bug.js` file shows a simple example. The `MyComponent` uses `useRouter` and attempts to navigate.  If `showComponent` is initially `false`, clicking the button will likely throw an error.

## Solution

The `bugSolution.js` provides a solution. We wrap the `MyComponent` with a conditional that checks the availability of `router` before use, this approach prevents the error by ensuring the router is ready before attempting to use its methods.