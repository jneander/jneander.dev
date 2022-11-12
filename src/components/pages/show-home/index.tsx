/* eslint-disable @next/next/no-img-element */
import {DefaultLayout} from '../../layouts'

export function ShowHome() {
  return (
    <DefaultLayout noName>
      <section className="identity">
        <div className="column one-third center">
          <h1 className="visually-hidden">A Little About Jeremy Neander</h1>

          <img
            alt="Cartoon portrait of Jeremy Neander, commissioned from artist Brad Yoo"
            className="profile-image"
            src="/images/profile.jpg"
          />

          <div className="name">Jeremy Neander</div>

          <div className="social-links">
            <a href="https://github.com/jneander">
              <i aria-hidden="true" className="fa fa-github"></i>

              <span className="visually-hidden">GitHub</span>
            </a>

            <a href="https://mastodon.social/@jneander" rel="me">
              <i aria-hidden="true" className="fa fa-twitter"></i>

              <span className="visually-hidden">Mastodon</span>
            </a>

            <a href="https://www.linkedin.com/in/jeremyneander">
              <i aria-hidden="true" className="fa fa-linkedin-square"></i>

              <span className="visually-hidden">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="column two-thirds">
          <article>
            <p>
              As a software craftsperson, I am continually developing my skills and practices to be
              of the highest quality and greatest effect. Creative problem-solving, logic,
              pragmatism, and a craving for knowledge drive me towards achieving both my personal
              and professional goals.
            </p>

            <p>
              I am a life-long learner, constantly seeking new challenges and reaching outside my
              comfort zone. When surrounded by passionate minds, the opportunities for growth are
              boundless. Everyone has something to teach.
            </p>
          </article>
        </div>
      </section>
    </DefaultLayout>
  )
}
