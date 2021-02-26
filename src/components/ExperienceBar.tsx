// eslint-disable-next-line no-use-before-define
import React, { useContext } from 'react'
import { ChallengersContext } from '../contexts/ChallengersContexts'
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar () {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengersContext)

  let percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

  percentToNextLevel = isNaN(percentToNextLevel) ? 0 : percentToNextLevel

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel ?? 0}%` }}/>
        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel ?? 0}%` }}>{currentExperience} xp</span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}
