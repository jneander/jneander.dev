---
employer: instructure
title: 'Canvas LMS: Gradebook Performance Improvements'
description:
  I detangled dependencies, eliminated wasteful code, and implemented live performance tuning for
  the Gradebook data loader.
technologies:
  - Webpack
  - CoffeeScript
  - JavaScript
  - Ruby on Rails
  - jQuery

order: 7
---

## Highlights

- Crafted plan to gradually improve initial load performance for Gradebook and Learning Mastery
  pages.
- Reduced Gradebook JavaScript bundle size by 78%.
- Reduced Learning Mastery JavaScript bundle size by 96%.
- Redesigned data loader for configurable optimization, per-resource without redeployment of Canvas.
- Integrated with Datadog RUM to record performance and inform ongoing adjustments to loading
  Gradebook data.

## Technologies

- Webpack
- CoffeeScript
- JavaScript
- Ruby on Rails
- jQuery
- jQuery UI
- Datadog RUM
