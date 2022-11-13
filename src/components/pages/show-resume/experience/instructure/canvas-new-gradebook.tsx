import styles from '../../styles.module.scss'

export function CanvasNewGradebook() {
  return (
    <article>
      <h3>
        <span className={styles.Role}>JavaScript & Rails Engineer</span> :{' '}
        <a href="http://www.canvaslms.com">Canvas</a>,{' '}
        <a href="https://community.canvaslms.com/docs/DOC-13333-canvas-release-new-gradebook">
          New Gradebook
        </a>
      </h3>

      <p>
        Each member of the team led milestones for subsets of new features. I was responsible for
        enhancing teachers&#39; experiences with entering grades in the Gradebook. I established
        expertise on legacy tools and their maintenance. We worked together to improve practices for
        implementation-agnostic UI testing and code reviews. I also contributed thousands of
        additional specs to front and back end spec suites.
      </p>

      <p>
        In working with Product and Design, I used tools like Sketch and Codepen in combination to
        ensure that their visions were being met before implementation was complete. It helped to
        identify edge and corner cases not realized in the design documents and informed subsequent
        decision-making.
      </p>

      <p>
        Collaborating with Community Advocates developed a better understanding of the needs and
        workflows of real users, spurring ideas and helping to make better decisions. Among the
        highlights of engaging with the community was delivering one of their oldest and
        most-requested features.
      </p>

      <p>
        We adapted modern, React-based UI to work with extremely legacy UI firmly coupled to
        outdated tools (i.e. adapted square peg to round hole). Some of the legacy tools and
        libraries we either augmented or refactored out include CoffeeScript, SlickGrid, Backbone,
        Ember, and plenty of jQuery spaghetti. Making these and other tools all work together was
        both interesting and challenging.
      </p>
    </article>
  )
}
