---
employer: glassdoor
title: B2B Platform
description:
  I progressed the organization’s microservices migration and reduced the technical debt disrupting
  teams.
technologies:
  - Node.js
  - React
  - JavaScript
  - jQuery
  - Java
  - CSS
  - Sass
order: 2
---

## Highlights

- Drove migration from legacy enterprise monoliths towards TypeScript-based microservices and
  React-based micro-frontends running on Node.js backends.
- Increased build speed by cataloging and eliminating unused source code.
- Improved code reuse by extracting shared components and behavior into common modules.

## Technologies

- Node.js
- React
- JavaScript
- jQuery
- Java
- CSS
- Sass (SCSS)
- Emotion

## Story

I joined the newly-formed B2B Platform Team to focus on improving the frontend foundation for the
Employer Center and its numerous microservices. At the root of the effort was a long-running
migration from a Java + JSP backend over to microservices and React-based micro-frontends. The
redistribution of technical responsibilities had resulted in inconsistent dependency management and
a mountain of technical debt.

My tasks included:

- quantifying existing progress to understand what remained
- planning the remaining transitional work
- porting JSP pages to React-based microservices
- communicating progress to org-level management
- distributing specific migration tasks to code owners
- identifying and eliminating unused frontend assets

I dove deep into technical debt across platforms, understanding and targeting pain points that were
preventing teams from moving their projects away from legacy architecture. Sometimes this meant
relocating code from one project to another to decouple a dependency and its projects from other
projects that were not being actively maintained. One example of this was extracting front end asset
builds from the two legacy monoliths so that they could be modernized independently of those
projects.

Other times this meant strategically introducing new tech debt in order to address a larger issue.
An example of this was duplicating old, fragile dependencies into a consuming project so that
subsets of the dependency could be gradually updated and/or replaced with newer solutions.
