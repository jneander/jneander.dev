import {RoleHeading} from '../shared'

export function CanvasFinalGradeOverride() {
  return (
    <article>
      <RoleHeading role="React UI Engineer">
        <a href="http://www.canvaslms.com">Canvas</a>,{' '}
        <a href="https://community.canvaslms.com/docs/DOC-16298-735531045366">
          Final Grade Override
        </a>
      </RoleHeading>

      <p>
        We added a way for teachers to manually adjust calculated grades for students on the cusp of
        a better grade than they had earned via math alone. I generalized the front end logic and
        interface components created for New Gradebook to work with grade overrides, rather than
        reinventing the wheel.
      </p>
    </article>
  )
}
