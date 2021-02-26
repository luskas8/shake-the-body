// eslint-disable-next-line no-use-before-define
import React, { useContext } from 'react'
import { ChallengersContext } from '../contexts/ChallengersContexts'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/ChallengerBox.module.css'

export function ChallengerBox () {
  const { activeChallenger, resetChallenger, completeChallenger } = useContext(ChallengersContext)
  const { resetCountdown } = useContext(CountdownContext)

  function handleChallenderSucceeded () {
    completeChallenger()
    resetCountdown()
  }

  function handleChallengerFailed () {
    resetChallenger()
    resetCountdown()
  }

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
                  onClick={handleChallengerFailed}
                >
                  Falhei
                </button>
                <button
                  type="button"
                  className={`${styles.challengerSucceededButton}`}
                  onClick={handleChallenderSucceeded}
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
