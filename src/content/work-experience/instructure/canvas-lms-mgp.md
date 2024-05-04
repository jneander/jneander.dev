---
employer: instructure
title: 'Canvas LMS: Multiple Grading Periods'
description:
  My team updated Canvas data models and grading features to support courses spanning multiple
  grading periods.
technologies:
  - Ruby on Rails
  - React
  - CoffeeScript
  - JavaScript
  - PostgreSQL
  - RSpec
order: 1
---

## Highlights

- Revised essential data and behavior models without regressions or downtime.

## Technologies

- Ruby on Rails
- React
- CoffeeScript
- JavaScript
- Ember
- SlickGrid
- PostgreSQL
- RSpec
- QUnit

## Story

Prior to 2016, Canvas LMS only supported a single grading period. For limited-duration courses, this
was fine. However, for a year-long course, this meant that instructors had no easy way to model
institutional grading periods within their Canvas courses. Additionally, if they wanted to weight
grades for assignments within a given grading period, they needed to either adjust assignment values
to make the math work, or do it offline after the fact.

Introducing multiple grading periods was not straightforward. It was a fundamental change to how
grades were calculated and how grading tools were structured. It was essentially like building
courses out of multiple, smaller courses, and making them all work together. It was an extra
challenge to make grading periods work with differentiated assignments (different due dates for
different students/sections), assignment groups, and historical grade locks.

We needed to eliminate assumptions baked into the code as they related to the “single grading
period” conceptual model. Grade calculations were retooled to work with new partitioning and
weighting rules, with consideration for student-specific due dates. All versions of the Gradebook UI
were updated with controls for navigation grading periods. And validations were implemented on both
the client and server sides to ensure that grades in past grading periods could no longer be
recalculated. This was both a performance concern and a way to protect historical records.

The entire feature is optional, defaulting to off for courses. When not enabled, an entire course
implicitly has one grading period.
