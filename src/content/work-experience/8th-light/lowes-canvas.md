---
employer: 8th-light
title: Lowe's Canvas
description:
  My team worked alongside our client’s designers and engineers to prototype an immersive home
  improvement shopping experience.
technologies:
  - HTML
  - CSS
  - Sass
  - JavaScript
  - Node.js
---

## Highlights

- Collaborated closely with client team at all stages of ideation and development.
- Created a touch screen kiosk application for browsing a product catalog.
- Integrated with a 3D projection service via local network.
- Implemented local API for an iOS companion app.

## Technologies

- HTML
- Sass (SCSS)
- JavaScript
- Node.js

## Story

On a second engagement with IDEO, I collaborated with a small team of designers and engineers to
prototype a "bathroom refresh shopping experience" for Lowe's Home Improvement. The project, called
"Lowe's Canvas," was an immersive shopping experience for installation in any Lowe's retail
location.

Designed to fit into a standard product bay, the Canvas was a cubic room with blank walls and floor,
painted to act like a projection screen. Multiple projectors were located in specific positions to
fill the surfaces with product imagery sourced from the Lowe's product catalog. Which products to
display was determined by the customer, using a touch-screen console colocated with the projection
room.

I was responsible for implementing the console application. It was a fullscreen Chrome application
hosted on a local Node.js server that presented all products available for display on the Canvas.
The products were grouped by type—wall paint, flooring, mirrors, vanities, etc. Touching one of the
products would communicate with the projection system and instantly update the imagery to reflect
the user's selection.

In addition to choosing products, the customer could then add their selection to a shopping list
that would include all the information they would need to locate and purchase the product in the
store. That list was available to print on-site and would be emailed to the customer for later
shopping.

The local application server would periodically, automatically sync with Lowe's corporate with
updates to the product catalog. Additionally, this server provided a local-network API for
communication with a companion iOS app used by store associates.
