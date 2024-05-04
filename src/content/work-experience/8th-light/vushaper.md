---
employer: 8th-light
title: Vushaper
description:
  My team developed a dynamic video streaming service for our client, delivering personalized
  content based on viewer input.
technologies:
  - Clojure
  - ClojureScript
  - JavaScript
---

## Highlights

- Created a rules engine for video stream augmentation based on real-time input and historical
  viewer data.
- Implemented dynamic, just-in-time video stream generation.
- Integrated with a video asset compression API.
- Maintained and extended a Clojure web application with mixed ClojureScript & JavaScript front-end.
- Iteratively redesigned architecture in response to evolving business requirements.

## Technologies

- Clojure
- ClojureScript
- JavaScript
- video compression
- video streaming

## Story

A client I worked with multiple times while at 8th Light was VuShaper, a dynamic video streaming
platform. The main concept was a single video stream with regular user prompts which displayed at
predetermined times in any given segment of the stream. When the user selected a given prompt, the
stream would by dynamically appended with additional segments appropriate to the context of the user
selection.

Imagine a "Choose Your Own Adventure" video service.

This involved creating and continually refining a rules engine that was flexible enough to handle
the highly-dynamic nature of arbitrary video content, but also intuitive enough for content creators
to utilize for any number of use cases. As those use cases were realized over time, the architecture
of this service was iterated, keeping pace with evolving business requirements.

This was a Clojure-based web service with a ClojureScript front end, which eventually migrated to
JavaScript.
