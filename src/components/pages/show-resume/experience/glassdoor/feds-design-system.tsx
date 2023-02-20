import {RoleHeading} from '../shared'

export function DesignSystem() {
  return (
    <article>
      <RoleHeading role="Design System Engineer">Design System & UI Library</RoleHeading>

      <p>
        Early on at Glassdoor, I assumed stewardship of the existing, internal UI Library. Our
        organization did not have a formal design system team. So I connected with Design to start
        an informal team and develop it organically as time allowed.
      </p>

      <p>
        While designs were continually developed in Figma, I started laying the groundwork for the
        core implementations and its documentation. I also mapped out a contribution model so that
        future, continued development would include folks from across the org. Knowing that
        substantial product initiatives would depend on a proper design system, I identified
        technical requirements to support those upcoming needs in addition to those already
        established.
      </p>

      <p>Technical requirements included:</p>

      <ul>
        <li>rooted in accessible web patterns</li>
        <li>incrementally-adoptable</li>

        <li>
          switchable from previous to future design system:
          <ul>
            <li>with no implementation changes by consuming code</li>
            <li>with minimal/no redeployment</li>
          </ul>
        </li>

        <li>documented via deployed Storybook instance</li>
        <li>built around the updated CSS strategy</li>
      </ul>

      <p>
        My individual efforts on the design system and its web-based UI Library were eventually
        incorporated into a formal Design System Team. Two contractors joined me for the initial web
        deliverables. When they and the rest of my existing team took over delivery of the rewritten
        UI Library, I started on the retrofitting of the existing version. The retrofit promises to
        minimize downstream engineering efforts while still enabling the design system to be
        delivered on deadline.
      </p>
    </article>
  )
}
