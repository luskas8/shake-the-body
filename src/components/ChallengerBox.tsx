// eslint-disable-next-line no-use-before-define
import React from 'react'
import styles from '../styles/components/ChallengerBox.module.css'

export function ChallengerBox () {
  const hasActiveChallenger = true

  return (
    <div className={styles.challengerBoxContainer}>
      {
        hasActiveChallenger
          ? (
            <div className={styles.challengerActive}>
              <header>Ganhe 400xp</header>

              <main>
                <img src="icons/body.svg" />
                <strong>Novo desafio</strong>
                <p>Levante e faça uma caminhada de 3 minutos</p>
              </main>

              <footer>
                <button
                  type="button"
                  className={`${styles.challengerFailedButton}`}
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
