---
employer: glassdoor
title: Employer Branding
description:
  My team delivered highly-publicized features for employers to address the needs and values of job
  seekers.
technologies:
  - React
  - JavaScript
order: 1
---

## Highlights

- Implemented front end experience for highly-publicized features across both B2B and B2C
  applications.
- Partnered with Internationalization to align the DEI feature with diverse international cultures
  and identities.
- Collaborated with back end engineers to design APIs and data models.

## Technologies

- React
- JavaScript
- Emotion

## Story

When I joined Glassdoor, I was a part of the Employer Branding team. Our work was focused on helping
employers tell their story on Glassdoor by using the Employer Center. We had a team of five: Product
Owner, Designer, Back End Engineer, Front End Engineer (me), and our Team Lead, who was a full-stack
engineer.

### Employer Center: Work From Home

We were only a few months into the COVID-19 pandemic at this point, so my first project on this team
was the "Work From Home" feature. This was an expansion on the data employers could provide about
their workplaces. We added first-class support for employers' work from home policies and presented
that information on the employer pages. This supported not just the employer's general policy, but a
complete breakdown of all policies, including:

- distinct policies by sections or departments within the company
- distinct policies based on levels of leadership (general workforce vs C-suite)
- present policies and (optionally) future policies
- programs and initiatives to support remote life—e.g. home office stipends, non-linear workdays

The feature itself wasn't substantial in terms of effort required to implement it, but it made a
considerable impact on the job market. It provided job seekers the critical information they needed
to evaluate employers based on their individual safety needs. At a time when the world was facing a
health crisis, working from home was not a luxury, it was a necessity. In some small way, this
feature also supported a general shift away from the central office as a default and towards a
remote-first or optionally hybrid model.

The feature had a React-based front end. On the back end, there was a combination of two legacy Java
monoliths and numerous Node.js micro-services. The former were gradually migrating over to the
latter, a process that would require several years to safely complete. Consequently, at this time,
the back end for this feature needed to utilize a combination of those services.

### Employer Center: Diversity, Equity, and Inclusion

The second feature I worked on as a part of the Employer Branding team was Glassdoor's "Diversity,
Equity, and Inclusion" feature. This was a more substantial and arguably far more impactful feature
than "Work From Home." It was also a major initiative for Glassdoor, enabling employers to publish
the details of representation within their organizations as well as their goals for improving that
representation over time.

It also empowered job seekers and employees to review employers through the lens of representation.
Ratings for all of the supported aspects of a company could be associated with the self-identified
attributes of reviewers—e.g. race/ethnicity, gender, sexual orientation. This information has been
massively influential in conveying the workplace experiences and salaries of individuals with
distinct identities, rather than all together in a single group of reviewers.

These tools brought a lot of much-needed attention to the conversation around DEI in the workplace.
On top of that, it put more power in the hands of people who've long been disadvantaged in the
workforce by codifying their values in a very public way. It challenged employers not just to
improve their diversity, equity, and inclusion, but to do so publicly and to participate in
long-running conversations about race, gender, sexual orientation, disability, and more.

Much like "Work From Home," this feature had a React-based front end and communicated with the same
back end services. Appreciating the sensitivity of getting this feature right, I worked very closely
with everyone, particularly Product and Internationalization, to ensure that this feature satisfied
and respected everyone's needs.

Glassdoor is an international website, available in many countries, languages, and combinations
thereof around the world. Internationalization wasn't just a matter of translation; cultural
differences needed to be accounted for when codifying the identities of racial/ethnic groups in
different regions. For instance, certain parts of the world have more specific concerns for
representation than others, and must therefore have their own unique set of options. Going further,
the same terminology (such as "indigenous" or "Black") can have different meaning in different
locales, and must therefore be distinct options not shared between those locales.

And of course, all of those needed translations across all supported languages in each of those
locales. Our internal tools required some minor adjustment to ensure we didn't mistake any one
identity for another of the same or a similar name in another locale. It was a fulfilling challenge,
and an opportunity to work closely with compassionate people in Product, Design, and
Internationalization on something we all cared deeply about.
