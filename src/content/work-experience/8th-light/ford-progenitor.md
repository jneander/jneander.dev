---
employer: 8th-light
title: Ford Progenitor
description:
  I collaborated with our client to prototype an interactive dashboard and media console with test
  vehicle integration.
technologies:
  - JavaScript
---

## Highlights

- Implemented the interface using Qt with JavaScript and C bindings.
- Simulated vehicle systems during development.
- Integrated with the car’s CAN bus for on-site testing.

## Technologies

- Qt
- JavaScript

## Story

One of the clients I worked with on multiple occasions was IDEO. IDEO is a creative agency who
design products, services, brands, and experiences for businesses around the world. At their office
located in Chicago, I partnered with them to develop a prototype car dashboard for Ford Motor
Company.

The project, called "Progenitor," involved crafting a digital interface to display essential
information about the vehicle—speed, wiper mode, headlight state, etc.—as well as state and metadata
from the media console. This information was updated in real-time, based on communication from the
vehicle's CAN bus. A set of Mac Minis located in the trunk were responsible for communicating with
the vehicle, processing that information, and broadcasting it to the application being displayed on
the screen behind the wheel.

Development took place mostly at the 8th Light office. Vehicle communication was simulated at the
intermediate layer between the CAN bus controller and the console application. This enabled the full
range of possible states of the system to be accounted for an tested in a safe, controllable, and
predictable environment. This tight feedback loop meant that I could maintain a steady cadence with
implementation between integration tests.

A stripped-down vehicle was used for integration testing. Build artifacts were loaded onto the
computer and closed the loop between the vehicle and the physical display. Application state was
visually and aurally monitored based on manual interactions from myself and the project lead in the
passenger seat. Quick adjustments were sometimes implemented during integration testing to address
either unexpected results or impromptu ideas.
