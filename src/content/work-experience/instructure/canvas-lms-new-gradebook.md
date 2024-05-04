---
employer: instructure
title: 'Canvas LMS: New Gradebook'
description:
  My team completely overhauled the Gradebook while delivering a wide range of powerful new features
  for Canvas instructors.
technologies:
  - React
  - CoffeeScript
  - JavaScript
  - Backbone.js
  - jQuery
  - Jest
  - Ruby on Rails
  - RSpec
  - Sketch
order: 2
---

## Highlights

- Gradually and seamlessly modernized the Gradebook front end while continuing new feature
  development.
- Integrated mixed legacy technologies and React with direction for ongoing migration.
- Became a subject matter expert on SlickGrid, Ember, and QUnit.
- Led entire team through planning and execution on specific milestones.
- Used Sketch and Codepen to validate and refine designs and proofs of concept before
  implementation, reducing development churn.
- Consulted with community advocates to better understand user needs and workflows, leading to
  better development decisions.
- Implemented Gradebook crosshairs, the overall third-most community-requested feature at the time.
- Redesigned the Gradebook front end architecture through gradual, deliberate refactoring.
- Collaboratively developed patterns and practices for implementation-agnostic UI testing.
- Employed the [Four Eyes Principle](https://www.openriskmanual.org/wiki/Four_Eyes_Principle) for
  code review on non-trivial changes.
- We finished what we started.

## Technologies

- React
- CoffeeScript
- JavaScript
- SlickGrid
- Backbone.js
- Ember
- jQuery
- jQuery UI
- QUnit
- Jest
- Ruby on Rails
- RSpec
- Sketch
- CodePen

## Story

**NOTE**: _This story takes place over nearly four years. It's a lot to cover, and I'm adding to
what's written below as I am able. Until it's finished, there might be unfinished threads,
grammatical errors, or simply typos._

Our first big project as a team was a complete overhaul of the Gradebook. The app had not seen much
in the way of new features for some time. Our Product Manager had a vision for what Gradebook could
become, and it was a substantial update to what was already present. In the early summer of 2016,
the entire Gradebook team, Engineers, QA, Design, Product Manager, and Project Manager, met in
Chicago for a week to refine the vision and break it down into more actionable components.

The desired changes were substantial, impacting pretty much every part of Canvas architecture—the
front end, the application server, the API, the data model, database concerns, etc. Our first
responsibility as Engineers was to get a sense of what would need to change about the current
implementations, and in roughly what order, and bring that back to the discussion.

Over the course of the planning week, the combination of technical awareness and product priorities
created a rough outline of the order of operations for what would be a years-long collaboration.

Canvas was early in a migration from legacy front end code (largely a web of jQuery, enhancing
static pages served from Rails) over to React (version 0.13.3 at the time). React was still fairly
new to both the industry and the company, so best practices and the limits of the library were not
yet well understood. That would become part of the ongoing problem-solving for our team and other
folks working on the front end. But the primary obstacle would be integrating React with existing
implementations without requiring a complete replacement nor negatively impacting the user
experience.

Gradebook had two main implementations on the front end: Gradebook itself, plus Screenreader
Gradebook (SRGB for short). The Gradebook, being essentially a spreadsheet with superpowers, was
built on top of a library called SlickGrid. Due to the complexity of the interface, it was fully
accessible. To ensure that all Gradebook users had an equivalent experience, regardless of
individual needs, Screenreader Gradebook existed to provide an alternate interface that was fully
accessible. The consequence of this was that all changes, bugfixes and new features alike,
essentially required us to do some amount of the work twice. Once for Gradebook and once for
Screenreader Gradebook.

This duplexity would be an ongoing challenge for me, enduring for the duration of my time at
Instructure.

### Gradebook (Primary)

Primary Gradebook was built on a combination of jQuery, jQueryUI, SlickGrid, React, Backbone, and a
sprinkling of other dependencies. Some of the essential dependencies were out of date, due to a
number of factors. Some of them were forked and inlined into the repository, effectively locking
them into a given version. Some of those additionally had subsequent changes made locally that had
not been reintegrated into their corresponding open source projects. Some of those changes could not
be reconciled with upstream changes. And lastly, some of these dependencies were no longer
maintained at all.

SlickGrid had all of these challenges. It was forked and inlined, modified for use cases in Canvas
making it (nearly) irreconcilable with later upstream changes, and is also no longer maintained as
an open source project.

### Screenreader Gradebook (SRGB)

Screenreader Gradebook was built on Ember (version 1.4.0), Handlebars, along with some jQuery
additions

### SpeedGrader

SpeedGrader was built almost exclusively on jQuery and jQueryUI.

SpeedGrader was its own application, providing an alternate grading experience for instructors
evaluating individual assignments. Though, while it did not share the same workflow as Gradebook or
SRGB, it would need to adopt some of the new features and improvements being planned for the
Gradebook domain.

### JavaScript, CoffeeScript, and React or: Why Can't We Be Friends?

In 2016, JavaScript was only a couple of years into its long-overdue renaissance. It only recently
received classes, and many of the language features taken for granted these days (2024+) were either
new or barely on the horizon. The language was still effectively behind its counterpart
CoffeeScript, which was still the default choice for Rails and would be until version 5.1 was
released in Spring of 2017. And because large projects like Canvas can often take time to adapt and
modernize.

As mentioned above, Canvas was using React 0.13.3 at the time. React had implemented class-based
components with version 13 (https://legacy.reactjs.org/blog/2015/03/10/react-v0.13.html), which did
not play well with CoffeeScript "classes," which were not native JavaScript classes under the hood.
This meant `React.createClass` was effectively the only option when using CoffeeScript. That was a
source of technical conflict between areas of the project.

Transpilation was still a relatively new development in JavaScript engineering. It was already
implemented in Canvas, with some caveats. Certain types of updates, like conversions from
CoffeeScript to JavaScript, could not yet be made in-place without accounting for import path
updates and sometimes an update to the module tooling. It would be years before this approached the
level of convenience we have these days.

The result of this assembly of tools is that we had to perform a somewhat elaborate dance to get
different sections of the front end to integrate successfully. This is just one example of the
problems front end engineers faced at the time. And it's one that everyone faced.

### Square Pegs and Round Holes

One of the first things our team had to figure out was how to get React to play nicely with the
existing libraries and frameworks used by the various Gradebook front end apps. React, at least at
the time, relied on stable references to DOM elements into which it would insert its own hierarchy
of elements for which it assumed responsibility. And since it controlled those elements, we couldn't
easily leverage existing widgets or DOM-based tools to continue delivering any experience we weren't
ready to convert to React just yet.

We needed to understand how to integrate React's lifecycle with those of SlickGrid, Ember, Backbone,
and the ad hoc lifecycles that supported the various user flows we were building upon. It was not
straightforward in the least.

SlickGrid was particularly challenging to integrate with. It is a Data Grid library, efficiently
rendering an arbitrary number of rows and columns into the DOM. To manage this, it uses a technique
called virtualization, where it limits the number of elements present in the DOM to minimize the
impact of DOM manipulation. This means that any given cell in the grid can be removed or recycled at
any time. Without hooking into SlickGrid's lifecycle, React would likely stumble on the sudden
disappearance of its containing element. Or perhaps worse, the cell index would be out of sync with
the content being rendered by React, confusing the user.

Fortunately, SlickGrid provided a set of lifecycle hooks that we could utilize to govern the
mounting, updating, and unmounting of the React-based cell view. And because we had a complete local
copy of SlickGrid, we were able to modify the source as needed. This solution proved successful and
stable.

### That's a Lotta Data!

A typical course in Canvas had several dozen students, a couple dozen assignments, a few assignment
groups, and a few grading periods. Most courses could load into the Gradebook with a handful of API
requests, mostly in parallel. The data generally loaded quickly, and instructors were able to
navigate the Gradebook without much delay.

In addition to simply navigating their course data, instructors also needed the ability to filter
and sort this data based on values like student name, grade, submission status, etc. This
functionality was dependent on a full load of the Gradebook, and originally re-loaded all of the
data according to the updated sort/filter settings. These settings were persisted on the client side
and were used when initially requesting the data on page load.

This was the reality that Gradebook had been built around. However, as tends to be the case with any
software, reality did not always align with expectations. Users of the Gradebook sometimes had large
courses, sometimes excessively so (like having 30,000 students, for example). This put a strain on
the client to hold all of that data, the network to fetch all of that data, and most crucially, on
the user to have to wait for all of that data.

There were a few things we needed to resolve as a part of tackling this performance problem.

First, the user's preferences were stored on the client. This meant that their preferences did not
carry over from one device or browser to another. This was an inconvenience for smaller courses and
a massive waste of time for larger courses, considering the burden of loading the data twice when
changing those preferences on a given client. This also meant that, without changing how/where these
data were stored, any optimizations would still need to wait for the Gradebook to load on the
client.

Second, the existing data loader had no memory of data that had previously been loaded on the page.
This meant that any time more data were needed in the Gradebook, any existing data that were still
relevant to the page would be reloaded as well. All student-related Gradebook data were queried by
student ids through the API. So, given the relevant student ids were known at the time of data load,
any request for that same data was unnecessarily wasteful.

Third, some data were higher priority than others, such as student information and submission data.
Those were the highest-priority for any instructor workflow and also needed to be loaded in sequence
(student, then submission). The initial data loader implementation went as far as delivering data to
the Gradebook view in an order that wouldn't break the page. But the data being loaded was not
prioritized according to user needs.

Finally, while the user would almost always be at the top of the Gradebook when loading student and
submission data, that was not necessarily the order in which requests for that data were resolved.
Between the API, the client network tools, and the existing data loading logic, the order in which
data were loaded into the Gradebook was unpredictable. For small courses, this wasn't a problem. But
for medium-to-large courses, data could potentially load bottom-to-top, forcing users to wait until
the end for data that should have been loaded first.

These issues all tangled together into a large problem. But each issue could be addressed relatively
independently, with some regard for how the others would be resolved. I worked with my teammate
Spencer Olson and my team lead Keith Garner to determine the overall solution and distribute the
work. While Spencer and Keith focused on the server side, and I focused on the client side, we
regularly paired on both sides to realize the best possible solution.

At the root of the problem, we determined that knowing which students should appear in the
Gradebook, and in which order, was the essential knowledge to inform how all other requests would be
prioritized and executed. Moving this knowledge from the client side persistence to the server side
solved more than one issue.

The first issue this solved was making the user experience consistent, regardless of which browser
or device they used. The same course loaded in Gradebook on one computer would appear exactly the
same as when loaded on another computer.

The next issue was the delay before first data load. Rather than wait for Gradebook code to load and
subsequently request student data, this highest-priority request could now preempt all other
client-side behavior.

The minimum data to load was the complete list of ids for the students to be loaded into the
Gradebook. This list was derived by applying the user's filtering and sorting preferences from the
database, telling the client exactly which student data to load and in what order. No other
information about the students or the course was necessary to start loading the rest of the data,
which meant this list was as efficient as we could make it, both in size and in speed.

A further optimization was "pre-fetching" the student ids early in the document load. One of our
front end devs wrote a shared tool for specifying high-priority client-side requests on the server
side. So, if some essential data need to be available as soon as possible on the client, but wasn't
appropriate to render onto the page from the server, the page action could specify a request for
that data that would be executed as soon as the document head was loaded on the client.

For Gradebook, the student ids were added to this "pre-fetch" queue. Once the Gradebook loaded, it
would retrieve the promise already created by this request and await its response. If the promise
had resolved already, the data loader would immediately continue with loading the remaining course
data. If it was still pending by the time the data loader required it, it would wait for the promise
to resolve. But because the request already had time to mostly process, any delay was significantly
reduced.

For the initial data load, the student ids provided the rows to be rendered by the Gradebook. The
columns (assignments, assignment groups, etc.) were requested separately. Once all of those data
were loaded, the structure of the Gradebook

The network layer didn't reliably facilitate requests in any order or priority. So, requests that
were issued in sequence didn't necessarily transmit in that same sequence. Even if concurrent
requests were limited and a hundred others were submitted in priority order, the first request to go
out could be the last one to complete. To guarantee order, we had to modify our network client to
inform the consumer via callback when a request had been initialized by the browser and not just
created by calling a function. This ensured that each request was actually being handled by the
browser before we added more to the queue.
