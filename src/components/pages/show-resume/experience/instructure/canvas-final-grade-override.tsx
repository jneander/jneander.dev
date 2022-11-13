import styles from '../../styles.module.scss'

export function CanvasFinalGradeOverride() {
  return (
    <article>
      <h3>
        <span className={styles.Role}>React UI Engineer</span> :{' '}
        <a href="http://www.canvaslms.com">Canvas</a>,{' '}
        <a href="https://community.canvaslms.com/docs/DOC-16298-735531045366">
          Final Grade Override
        </a>
      </h3>

      <p>
        We added a way for teachers to manually adjust calculated grades for students on the cusp of
        a better grade than they had earned via math alone. I generalized the front end logic and
        interface components created for New Gradebook to work with grade overrides, rather than
        reinventing the wheel.
      </p>
    </article>
  )
}
