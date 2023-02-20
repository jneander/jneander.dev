import {RoleHeading} from '../shared'

export function EcPlatformTeam() {
  return (
    <article>
      <RoleHeading role="Frontend Engineer">
        <a href="https://www.glassdoor.com/employers/resources/glassdoor-employer-center-guide/">
          Employer Center
        </a>
        {', '}
        B2B Platform Team
      </RoleHeading>

      <p>
        I joined the newly-formed B2B Platform Team to focus on improving the frontend foundation
        for the Employer Center and its numerous microservices. At the root of the effort was a
        long-running migration from a Java + JSP backend over to React-based microservices. The
        redistribution of technical responsibilities had resulted in inconsistent dependency
        management and a mountain of technical debt.
      </p>

      <p>My responsibilities included:</p>

      <ul>
        <li>quantifying existing progress to understand what remained</li>
        <li>planning the remaining transitional work</li>
        <li>porting JSP pages to React-based microservices</li>
        <li>communicating progress to org-level management</li>
        <li>distributing specific migration tasks to code owners</li>
        <li>identifying and eliminating unused frontend assets</li>
      </ul>
    </article>
  )
}
