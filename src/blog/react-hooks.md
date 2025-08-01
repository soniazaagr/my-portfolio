---
title: "Understanding React Hooks"
date: "2025-06-12"
summary: "A deep dive into useState, useEffect, and custom hooks in React."
slug: "react-hooks"
---

## Introduction

React Hooks let you use state and other features without writing a class. In this article, we'll break down the core hooks and how to build your own.

### useState Example

```tsx
const [count, setCount] = useState(0);

useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
