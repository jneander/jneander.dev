import styles from '../../styles.module.scss'

export function BlustorGatekeeper() {
  return (
    <article>
      <h3>
        <span className={styles.Role}>Lead Engineer</span> :{' '}
        <a href="https://www.blustor.co">BluStor GateKeeper</a>, Biometrics-Secured Android SDK &
        Apps
      </h3>

      <p>
        Created an Android-based SDK and app for bluetooth communication with a biometrics-secured
        smartcard. Developed the protocol for serial communication via bluetooth. Integrated with a
        third-party biometrics SDK. Collaborated with smartcard hardware team to develop and
        document the communication API.
      </p>

      <p>
        Extracted SDK, sample app, and production app from original proof-of-concept. Documented SDK
        for third-party developers. Emphasized ease of development for current and future team
        members.
      </p>
    </article>
  )
}
