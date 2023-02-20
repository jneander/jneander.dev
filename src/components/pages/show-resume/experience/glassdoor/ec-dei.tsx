import {RoleHeading} from '../shared'

export function DiversityEquityInclusion() {
  return (
    <article>
      <RoleHeading role="Frontend Engineer">
        <a href="https://www.glassdoor.com/employers/resources/glassdoor-employer-center-guide/">
          Employer Center
        </a>
        {', '}
        <a href="https://www.glassdoor.com/employers/blog/employee-sentiment-by-demographic/">
          Diversity, Equity, and Inclusion
        </a>
      </RoleHeading>

      <p>
        Extending from the {'"Work From Home"'} feature, I also implemented the React-based web
        interface for {`Glassdoor's "Diversity, Equity, and Inclusion"`} feature. This was a big
        initiative at Glassdoor, enabling employers to publish the details of representation within
        their organizations as well as their goals for improving that representation over time.
      </p>

      <p>
        I again coordinated with feature leads across Product, Design, Backend, and
        Internationalization disciplines to ensure the web implementation satisfied{` everyone's `}
        needs. Internationalization was especially important, as cultural differences needed to be
        accounted for when providing the diversity content to different users on both the job-seeker
        and employer sides of the feature.
      </p>
    </article>
  )
}
