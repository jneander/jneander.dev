---
layout: 'layouts/resume'
title: Resume
---

## Experience

### [Glassdoor](https://www.glassdoor.com) ~ Company Reviews and Conversations

#### Design System Lead Engineer : Design System & UI Library

Early on at Glassdoor, I assumed stewardship of the existing, internal UI Library. Our organization
did not have a formal design system team. So I connected with Design to start an informal team and
develop it organically as time allowed.

While designs were continually developed in Figma, I started laying the groundwork for the core
implementations and its documentation. I also mapped out a contribution model so that future,
continued development would include folks from across the org. Knowing that substantial product
initiatives would depend on a proper design system, I identified technical requirements to support
those upcoming needs in addition to those already established.

Technical requirements included:

- rooted in accessible web patterns
- incrementally-adoptable
- switchable from previous to future design system:
  - with no implementation changes by consuming code
  - with minimal/no redeployment
- documented via deployed Storybook instance
- built around the updated CSS strategy

My individual efforts on the design system and its web-based UI Library were eventually incorporated
into a formal Design System Team. Two contractors joined me for the initial web deliverables. When
they and the rest of my existing team took over delivery of the rewritten UI Library, I started on
the retrofitting of the existing version. The retrofit promises to minimize downstream engineering
efforts while still enabling the design system to be delivered on deadline.

#### _Frontend Engineer_ : CSS Strategy Research

My work on the B2B Platform Team naturally extended into org-wide frontend concerns, as the
technical debt I was addressing extended across the entire organization. A substantial hurdle for
fellow frontend engineers—and by extension, all product development—was the near-incalculably large
collection of legacy CSS. We needed tools to address this growing problem.

Additionally, we needed to select more appropriate tools for our organization, allowing us to more
quickly and confidently deliver frontend features without having to fight our tools or reinvent the
wheel. To start, I surveyed all frontend engineers for their experiences and preferences in relation
to developing with CSS, both at Glassdoor and outside. Results were parsed, reported to the org,
then used for a deeper dive into potential solutions.

Knowing our collective experience and preferences, the current state and constraints of our
applications, and the near-future needs of the organization that would soon need to be realized, the
research project continued into the assorted technologies used in the industry. This extended effort
culminated in two proofs of concept, plus an exhaustive report and recommendation on the direction I
believed the organization should take.

After review by the team, including with the VP of Engineering, a consensus was reached. The
research and its conclusion were subsequently presented to the organization, laying the conceptual
groundwork for frontend engineers to follow.

#### _Frontend Engineer_ : [Employer Center](https://www.glassdoor.com/employers/resources/glassdoor-employer-center-guide/), B2B Platform Team

I joined the newly-formed B2B Platform Team to focus on improving the frontend foundation for the
Employer Center and its numerous microservices. At the root of the effort was a long-running
migration from a Java + JSP backend over to React-based microservices. The redistribution of
technical responsibilities had resulted in inconsistent dependency management and a mountain of
technical debt.

My responsibilities included:

- quantifying existing progress to understand what remained
- planning the remaining transitional work
- porting JSP pages to React-based microservices
- communicating progress to org-level management
- distributing specific migration tasks to code owners
- identifying and eliminating unused frontend assets

#### _Frontend Engineer_ : [Employer Center](https://www.glassdoor.com/employers/resources/glassdoor-employer-center-guide/), [Diversity, Equity, and Inclusion](https://www.glassdoor.com/employers/blog/employee-sentiment-by-demographic/)

Extending from the "Work From Home" feature, I also implemented the React-based web interface for
Glassdoor's "Diversity, Equity, and Inclusion" feature. This was a big initiative at Glassdoor,
enabling employers to publish the details of representation within their organizations as well as
their goals for improving that representation over time.

I again coordinated with feature leads across Product, Design, Backend, and Internationalization
disciplines to ensure the web implementation satisfied everyone's needs. Internationalization was
especially important, as cultural differences needed to be accounted for when providing the
diversity content to different users on both the job-seeker and employer sides of the feature.

#### _Frontend Engineer_ : [Employer Center](https://www.glassdoor.com/employers/resources/glassdoor-employer-center-guide/), [Work From Home](https://www.glassdoor.com/employers/blog/introducing-work-from-home-policies/)

I implemented the React-based web interface for Glassdoor's "Work from Home" feature, enabling
employers and job seekers to find each other based on policies and preferences relating to the
COVID-19 pandemic. I coordinated with feature leads across Product, Design, and Backend disciplines
to ensure the web implementation satisfied everyone's needs.

### [Instructure](https://www.instructure.com) ~ Educational Technology Company

#### _React UI Engineer_ : [Canvas](http://www.canvaslms.com), [Final Grade Override](https://community.canvaslms.com/docs/DOC-16298-735531045366)

We added a way for teachers to manually adjust calculated grades for students on the cusp of a
better grade than they had earned via math alone. I generalized the front end logic and interface
components created for New Gradebook to work with grade overrides, rather than reinventing the
wheel.

#### _React UI & Rails Engineer_ : [Canvas](http://www.canvaslms.com), [Anonymous Moderated Marking](https://community.canvaslms.com/docs/DOC-14924-canvas-release-anonymous-moderated-grading)

The team was given large feature request with a short deadline. Retooled data associations to be
anonymous while preserving functionality. Rewrote front end moderation workflow. Proactively engaged
Product and Design to further elaborate product workflows ahead of implementation.

#### _JavaScript & Rails Engineer_ : [Canvas](http://www.canvaslms.com), Build Tools

My experiences across past client work and side projects provided tools and methods for debugging,
understanding, and improving tools used to build Canvas. Testing tools and practices were
continually updated and adjusted to benefit the team and the organization. I diagnosed and resolved
critical build issues and averted engineering downtime.

#### _JavaScript & Rails Engineer_ : [Canvas](http://www.canvaslms.com), [New Gradebook](https://community.canvaslms.com/docs/DOC-13333-canvas-release-new-gradebook)

Each member of the team led milestones for subsets of new features. I was responsible for enhancing
teachers' experiences with entering grades in the Gradebook. I established expertise on legacy tools
and their maintenance. We worked together to improve practices for implementation-agnostic UI
testing and code reviews. I also contributed thousands of additional specs to front and back end
spec suites.

In working with Product and Design, I used tools like Sketch and Codepen in combination to ensure
that their visions were being met before implementation was complete. It helped to identify edge and
corner cases not realized in the design documents and informed subsequent decision-making.

Collaborating with Community Advocates developed a better understanding of the needs and workflows
of real users, spurring ideas and helping to make better decisions. Among the highlights of engaging
with the community was delivering one of their oldest and most-requested features.

We adapted modern, React-based UI to work with extremely legacy UI firmly coupled to outdated tools
(i.e. adapted square peg to round hole). Some of the legacy tools and libraries we either augmented
or refactored out include CoffeeScript, SlickGrid, Backbone, Ember, and plenty of jQuery spaghetti.
Making these and other tools all work together was both interesting and challenging.

#### _Full-Stack Web Engineer_ : [Canvas](http://www.canvaslms.com), [Multiple Grading Periods](https://community.canvaslms.com/docs/DOC-10006-4152465815)

We extended business logic to accommodate needs of institutions using multiple levels of bucketing
for grading. Grade calculations were retooled to work with new partitioning and weighting rules.
Front and back end validations were implemented to ensure historical grades were no longer
recalculated, both for performance and to prevent user shenanigans.

#### _React UI Engineer_ : [Instructure UI](https://instructure.design/), Open Source React UI Library

Through use, feedback, discussions, and direct contributions, I helped the InstUI team develop the
library from pre-1.0 to its current version. I was invited to Brain Trust for influencing the vision
and ongoing development of InstUI.

### [8th Light](https://www.8thlight.com) ~ Software Development Consultancy

#### _Lead Engineer_ : [BluStor GateKeeper](https://www.blustor.co), Biometrics-Secured Android SDK & Apps

Created an Android-based SDK and app for bluetooth communication with a biometrics-secured
smartcard. Developed the protocol for serial communication via bluetooth. Integrated with a
third-party biometrics SDK. Collaborated with smartcard hardware team to develop and document the
communication API.

Extracted SDK, sample app, and production app from original proof-of-concept. Documented SDK for
third-party developers. Emphasized ease of development for current and future team members.

#### _Lead Node.js & JavaScript Engineer_ : Immersive Home Refresh Product Experience

Led development on a dynamic touch interface for a home improvement products catalog which responded
to user interaction by projecting product imagery onto the surfaces of a blank room. The product
browser was a JavaScript web application hosted on a local Node.js server. A client-managed
application synced product inventory data daily. The local server provided an API for an iOS
companion app.

Collaborated closely with the UX Designers. Emphasis was given to making the Interface Designers’
work as frictionless as possible. Succeeded with the challenge of using zero JavaScript dependencies
in the product browser.

#### _Full-Stack Clojure & ClojureScript Developer_ : [VuShaper](http://www.vushaper.com), Dynamic Video Streaming Platform

Developed dynamic video streaming platform with configurable viewer prompts. Created a rules engine
for video stream augmentation based on real-time input and historical viewer data. Maintained and
extended a Clojure web application with mixed ClojureScript & JavaScript front-end. Integrated with
video asset compression API. Iteratively redesigned architecture in response to evolving business
requirements.

#### _Full-Stack Web & Mobile Developer_ : [AXUS](https://www.axustravelapp.com), Traveler Itinerary Curation Tool

Maintained and further developed Clojure-based web application and API. Integrated with travel
industry booking databases. Refactored legacy Clojure application with extensible architecture.
Converted legacy ClojureScript library to JavaScript. Integrated Android app with API while
maintaining feature parity with iOS app. Emphasized ease of maintenance and extension for current
and future team members.

#### _Lead Android Developer_ : College Athletics Recruiting Platform

Developed Android counterpart to existing iOS app. Integrated with internal API for authentication
and user data. Implemented continuous integration with local Jenkins server. Collaborated with UI
Designer for app interactions and assets.

#### _Full-Stack Rails & JavaScript Engineer_ : Groupon

Developed Rails and Marionette.js single-page application to replace existing sales pipeline tool.
Planned and delivered around iterations. Collaborated with a designer, junior developers, and
contracted developers. Integrated with internal services.

#### _Full-Stack Node.js & JavaScript Engineer_ : Groupon

Refactored legacy Node application in production. Harnessed untested code with test suite to enable
safe, stable changes. Collaborated with overseas teams for homegrown internationalization.
Integrated with internal services and SalesForce.

#### _Rails Engineer_ : Groupon

Collaborated with developer team to scale an inventory system through service extraction.
Contributed to performance enhancements at the application and database layers to support hundreds
of thousands of requests per minute.

#### _Qt/JavaScript Interface Engineer_ : Automotive Dashboard Prototype

Implemented automotive console UI using Qt. Integrated with CAN bus using both C and Qt-JavaScript
bindings. Deployed on-site with client team's prototype hardware installed in the vehicle.

#### _Rails Developer_ : College Athletics Recruiting Platform

Extracted business behavior from legacy Java application into Ruby application. Extended automated
email service for event-based behavior. Integrated email rendering with homegrown A/B testing
service and Mandrill.

#### _Ruby Developer_ : Groupon

Implemented rules-based account automation for the sales team. Iteratively refined and extended
rules to match an existing, manual process. Regularly demonstrated development progress and
discussed agenda in iteration planning meetings.

#### _Android Developer_ : White-Label Video on Demand Platform

Contributed to a widely-distributed Android SDK and associated apps with an emphasis on
extensibility. Collaborated with development team while also teaching best practices and design
patterns.

## Overview

### Companies

- [Glassdoor](https://www.glassdoor.com) ~ Employer Reviews and Conversations
  - Lead Software Engineer, November 2022–March 2023
  - Senior Front End Engineer, July 2020–November 2022
- [Instructure](https://www.instructure.com) ~ Education Technology Company
  - Senior Software Engineer, August 2018–June 2020
  - Software Engineer, March 2016–August 2018
- [8th Light](https://www.8thlight.com) ~ Software Development Consultancy
  - Software Crafter, December 2012–February 2016
  - Software Apprentice, June 2012–December 2012

### Languages & Environments

- JavaScript
- TypeScript
- Node.js
- Ruby
- Clojure
- Java
- Python
- C
- Go

### Libraries, Frameworks, and SDKs

- React
- Next.js
- Webpack
- Storybook
- Express
- Rails
- Sinatra
- InstUI

### Practices

- Accessibility
- BDD/TDD Testing
- Design Systems
- Large-scale Refactoring
- API Design
- Mentoring
- Documentation
- Estimations
