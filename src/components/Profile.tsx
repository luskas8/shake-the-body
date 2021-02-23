import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/luskas8.png" alt="Lucas Anjos" />
      <div>
        <strong>Lucas Anjos</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  )
}