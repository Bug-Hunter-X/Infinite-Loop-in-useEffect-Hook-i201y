# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by incorrectly defining the dependency array. 

## The Bug
The `bug.js` file contains a component that uses `useEffect` to update the state variable `count`.  The dependency array is empty (`[]`), meaning the effect runs after every render.  Inside the effect, `setCount` updates `count`, which causes a re-render, which causes the effect to run again, and so on, resulting in an infinite loop.

## The Solution
The `bugSolution.js` file shows how to fix this by adding `count` as a dependency to the `useEffect` hook. This ensures the effect only runs when the `count` value changes. 

This is a simple example to highlight a frequently encountered error.  Make sure you are carefully reviewing the dependencies of your useEffect hooks to avoid unexpected behavior.