---
title: Take Two
description: Lessons learned from mistakes in application design
slug: take-two
date: 2012-10-10
---

On the apprentice team's project, this week's iteration was dedicated to implementing a particular
new feature. An implementation was discussed and approved between us. At the start of today, I began
working on it. I was close to finishing, perhaps two tests away from completion, when it was
realized that a separate effort to implement a persistence layer was revealing conflicts with some
existing elements of our application.

We reconvened and discussed the matter. After thoroughly evaluating our needs and our options, we
reached a firm conclusion on how to resolve it. A consequence of this meeting was that all of my
work to that point was unusable. It was well-tested and well-constructed, but did not support the
changes which needed to be made. Sadly, this happens to everyone at one time or another.

After this experience, which is certainly not the first and likely won't be the last, I feel the
need to understand what went wrong and how to help prevent these circumstances from arising again.

## What went wrong?

A previous design decision involved an assumption of compatibility with a not-yet-chosen database.
Implementation details, however few, preceded the choice of database. Essentially, we were building
a part of our application on an expectation that would not be met.

The next problem, which is beginning to reveal itself, is limited abstraction separating the core of
our application from the library governing the persistence layer. Too much of our application is
using direct calls to external library functions.

## What could have prevented this?

Both issues stem from the same root cause: a lapse in discipline. Following acceptable programming
practices should have clued us in to the mistakes we were making, at a time when correcting or
prevent such mistakes would be trivial. Couplings and open implementations are substantial gaffes.
The distinct isolation of components should be of paramount importance, for reasons even greater
than what was revealed with this experience.

Implementation details should be decided only when they can be tested, and not a moment sooner.
Describing application logic in terms not native to the application is a clue that dependencies are
creeping in. When making these decisions, and implementing application logic, it should remain as
high-level as possible.

Using a stand-in for a library before that library is available is a challenge. It can be done,
provided a layer of abstraction simplifies the flow of information from one side of this layer to
the other. In our case, this decision backfired. A non-trivial structural change is now required to
both complete the current story and also to accommodate future design decisions. Going forward,
observing better practices (especially the Dependency Inversion Principle) will help us avoid
similar challenges.
