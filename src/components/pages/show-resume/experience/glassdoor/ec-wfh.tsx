import {RoleHeading} from '../shared'

export function EmployerCenter() {
  return (
    <article>
      <RoleHeading role="Frontend Engineer">
        <a href="https://www.glassdoor.com/employers/resources/glassdoor-employer-center-guide/">
          Employer Center
        </a>
        {', '}
        <a href="https://www.glassdoor.com/employers/blog/introducing-work-from-home-policies/">
          Work From Home
        </a>
      </RoleHeading>

      <p>
        I implemented the React-based web interface for {`Glassdoor's "Work from Home"`} feature,
        enabling employers and job seekers to find each other based on policies and preferences
        relating to the COVID-19 pandemic. I coordinated with feature leads across Product, Design,
        and Backend disciplines to ensure the web implementation satisfied {`everyone's`} needs.
      </p>
    </article>
  )
}
