import {LogoGithub, LogoLinkedin, LogoMastodon} from '../../icons'
import {DefaultLayout} from '../../layouts'
import {Avatar} from './avatar'
import {SocialLink} from './social-link'

import styles from './styles.module.scss'

export function ShowHome() {
  return (
    <DefaultLayout noName>
      <div className="column one-third center">
        <h1 className="visually-hidden">A Little About Jeremy Neander</h1>

        <Avatar />

        <div className={styles.Name}>Jeremy Neander</div>

        <div className={styles.SocialLinkList}>
          <SocialLink SvgIcon={LogoGithub} href="https://github.com/jneander" name="GitHub" />

          <SocialLink
            SvgIcon={LogoMastodon}
            href="https://mastodon.social/@jneander"
            name="Mastodon"
            rel="me"
          />

          <SocialLink
            SvgIcon={LogoLinkedin}
            href="https://www.linkedin.com/in/jeremyneander"
            name="Linkedin"
          />
        </div>
      </div>

      <div className="column two-thirds">
        <p>
          As a software craftsperson, I am continually developing my skills and practices to be of
          the highest quality and greatest effect. Creative problem-solving, logic, pragmatism, and
          a craving for knowledge drive me towards achieving both my personal and professional
          goals.
        </p>

        <p>
          I am a life-long learner, constantly seeking new challenges and reaching outside my
          comfort zone. When surrounded by passionate minds, the opportunities for growth are
          boundless. Everyone has something to teach.
        </p>
      </div>
    </DefaultLayout>
  )
}
