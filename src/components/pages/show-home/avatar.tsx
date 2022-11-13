/* eslint-disable @next/next/no-img-element */

import styles from './styles.module.scss'

export function Avatar() {
  return (
    <img
      alt="Cartoon portrait of Jeremy Neander, commissioned from artist Brad Yoo"
      className={styles.Avatar}
      src="/images/profile.jpg"
    />
  )
}
