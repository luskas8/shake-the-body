// eslint-disable-next-line no-use-before-define
import React, { useContext } from 'react'
import { ChallengersContext } from '../contexts/ChallengersContexts'
import styles from '../styles/components/Profile.module.css'

export function Profile () {
  const { level } = useContext(ChallengersContext)
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/luskas8.png" alt="Lucas Anjos" />
      <div>
        <strong>Lucas Anjos</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}
