import styles from '../../styles.module.scss'

export function Vushaper() {
  return (
    <article>
      <h3>
        <span className={styles.Role}>Full-Stack Clojure & ClojureScript Developer</span> :{' '}
        <a href="http://www.vushaper.com">VuShaper</a>, Dynamic Video Streaming Platform
      </h3>

      <p>
        Developed dynamic video streaming platform with configurable viewer prompts. Created a rules
        engine for video stream augmentation based on real-time input and historical viewer data.
        Maintained and extended a Clojure web application with mixed ClojureScript & JavaScript
        front-end. Integrated with video asset compression API. Iteratively redesigned architecture
        in response to evolving business requirements.
      </p>
    </article>
  )
}
