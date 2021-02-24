// eslint-disable-next-line no-use-before-define
import React, { useContext } from 'react'
import { ChallengersContext } from '../contexts/ChallengersContexts'
import styles from '../styles/components/ChallengerBox.module.css'

export function ChallengerBox () {
  const { activeChallenger, resetChallenger } = useContext(ChallengersContext)

  return (
    <div className={styles.challengerBoxContainer}>
      {
        activeChallenger
          ? (
            <div className={styles.challengerActive}>
              <header>Ganhe {activeChallenger.amount} xp</header>

              <main>
                <img src={`icons/${activeChallenger.type}.svg`} />
                <strong>Novo desafio</strong>
                <p>{activeChallenger.description}</p>
              </main>

              <footer>
                <button
                  type="button"
                  className={`${styles.challengerFailedButton}`}
                  onClick={resetChallenger}
                >
                  Falhei
                </button>
                <button
                  type="button"
                  className={`${styles.challengerSucceededButton}`}
                >
                  Completei
                </button>
              </footer>
            </div>
            )
          : (
            <div className={styles.challengerNotActive}>
              <strong>
                Finalize um ciclo para receber um desafio
                </strong>
              <p>
                <img src="icons/level-up.svg" alt="Level Up" />
                  Avance de level completando desafios.
                </p>
            </div>
            )
      }
    </div >
  )
}
