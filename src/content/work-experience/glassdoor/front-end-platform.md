---
employer: glassdoor
title: Front End Platform
description:
  I worked with my team to modernize our shared front end tools, and authored the organization’s CSS
  strategy.
technologies:
  - Node.js
  - Next.js
  - React
  - Sass
  - Webpack
order: 3
---

## Highlights

- Resolved key technical debt to minimize barriers for eventual company rebrand.
- Authored CSS strategy through research, organization surveys, and building consensus.
- Established methods to modernize frontend projects without disrupting teams.
- Built service to audit and trace Node.js dependencies and interdependencies across all internal
  projects.
- Saved 61% of overall build size by auditing web traffic and identifying unused build artifacts.
- Advocated for accessible product practices as a part of Accessibility Guild.

## Technologies

- Node.js
- Next.js
- React
- Sass (SCSS)
- Webpack
- GitLab
- JFrog Artifactory
- Bitbucket Server

## Story

The work that I had been doing as a part of the B2B Platform team was brought to the attention of
our VP of Engineering, who was building a small team of engineers dedicated to front end concerns
shared across the organization. It was an opportunity to continue doing the same type of work I was
currently pursuing at the time, but on the scale of the entire organization rather than just the B2B
side of things.

Along with the VP, I joined a couple of other engineers from around the company, including Vicky
Setyawan, a tremendously skilled web engineer. This felt like a rare and special opportunity to live
my values, doing right by others and helping people do their best work. We each committed to deep
work in the shared libraries, tools, and configurations used by or otherwise impacting every front
end engineer at Glassdoor.

### Dependency Hell

Continuing my work from the B2B Platform team, I surveyed the dependency map across all of our front
end projects. There were north of a hundred individual projects, not all actively maintained. Many
projects depended on each other, several steps deep, and with inconsistent versions from the many
years of prior development. Additionally, some of these projects were firmly anchored to unsupported
versions of either packages and/or Node.js versions, which magnified our security concerns.

Oftentimes, a dependency would have several different paths to inclusion, from different
intermediate dependencies. This meant that updating any given dependency would require a similar
update for each project in the dependency tree before it could be fully updated in the topmost
project.

One dilemma came in the form of inconsistent versioning. Some projects were developed without a full
commitment to semantic versioning, which meant that a minor-level dependency update could introduce
breaking changes. Making matters worse, the errors introduced were almost entirely runtime errors.
To minimize the risk of updates, each of those dependencies needed to be updated by hand.
Application behavior was manually verified and corrected as needed.

Explicit, fixed dependency versions were another issue. Somewhere in the tree, there would be a
pinned version of one of the projects holding back a complete update. These popped up regularly,
even after resolving conflicts. Sometimes dependencies simply didn’t agree.

Rather than continue the world’s worst game of Whack-A-Mole, I decided to create a map of all of our
projects’ dependencies so that I could strategically target outdated dependencies (both internal and
external) and consolidate versions using far fewer commits.

I started by connecting with our Bitbucket Server instance and our GitLab organization, retrieving
all `package.json` and `package-lock.json` files from all repositories. I automated this using a
Node.js script so that I could re-scan projects on command. Traversing these files gave me a much
more definitive look at the dependency versions specified in the most up-to-date commits on the
primary development branches.

But that was only part of the picture. For projects that didn’t have a lockfile, the actual
installed dependencies could vary according to when they were installed. For any historical versions
of dependencies, I needed to know what _their_ installed dependencies would be. I couldn’t find a
tool to determine this without installing the dependencies first, so I decided to replicate the
resolution process.

I connected with the API for our instance of JFrog Artifactory, the package and artifact registry
used for internal packages and for caching trusted external packages. Through this API, I could read
the dependencies for any version of any package our projects used, whether internal or external.
This gave me a complete graph of the dependencies for every top-most project—their request versions,
their actual installed versions, and their complete set of inclusion paths.

To visualize this information, I spun up a Next.js project and implemented a basic interface to
navigate this graph and to search for packages with any arbitrary version. It was purposefully crude
to prove the concept and fill the immediate need.

The next step was putting this information to use. Rather than chasing down dependencies at the leaf
nodes in the trees, effectively maximizing the number of manual changes required to get everything
safely updated, this tool enabled me to identify safe, discrete updates that would prune entire
ranges of outdated dependencies in a single commit. I could even target pinned dependencies and
eliminate their unwelcome surprises. It was still a manual and relatively tedious process. But it
was much, much faster with this resource.

All of this achieved a methodical, far-reaching update of dependencies with minimal disruption to
teams responsible for the affected projects.

Given the opportunity, the next evolution of this tool would have algorithmically identified the
changes to make instead of manually searching. And perhaps later on, those changes could have been
submitted to the various repositories with the push of a button.

Updating Sass dependencies was a similar issue. Because Sass supports `@import` directives,
dependencies on other source files were usually implicit, and often wildly indirect. One file could
depend on code that was defined in the file that imported it, or in a file imported further back in
the tree.

When trying to either update styles or eliminate dead code, errors were frequent. Fortunately, they
all happened at build time, so the feedback was quick and the risk was limited to indirect, logical
dependencies that reached across projects. Only a few of those occurred, and they happened at build
time as well.

### Dead Code Removal

Dead code existed as both JavaScript and CSS/Sass source. In the case of JavaScript and Sass files,
their absence from a build output was a clear indicator that they were not used and could be
deleted. But even if they were included in the build, that wasn’t a reliable indicator that the code
or styles were still in use on the client side.

After encountering many files that seemed to be abandoned, I looked for a way to confirm these
suspicions. I figured that, if they were built but never requested by any clients, that was a good
sign that they were no longer in use.

I determined all of the root paths from which any of these files were served. To track their request
history, I partnered with a member of the Ops team to export CSVs containing every request to any of
those paths, accounting for international domains as well. The most recent 60 days of logs were
queried and handed off to me. From there, I was able to correlate all potential variations of
requests for each build asset with those from each of the logs. Any asset that was never requested
was marked as a candidate for removal.

Some assets from this list were obvious enough relics that they could be eliminated immediately.
Others warranted a cursory check to confirm their safety for removal. The rest were brought to the
attention of the responsible teams for final confirmation.

Altogether, this eliminated 61% of overall build size.

While it can’t quite be considered “dead code,” identical implementations of CSS styles are
similarly wasteful. As a consequence of overused Sass `@import` directives, duplicated source files,
and divergent implementations, there were numerous styles that were either repeated in the client
assets or shared identical properties with other styles with different selectors.

To address this, I parsed every CSS file resulting from the build steps for both monolith projects.
Each selector and its properties were accounted for in a Google Sheet. The intention was to start by
tracing wholesale duplication and consolidating those. After that, some pattern analysis would have
been used to find other opportunities to eliminate duplicates. Unfortunately, this work was set
aside when the design system rightly became a priority.

### CSS Strategy Research

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
