// eslint-disable-next-line no-use-before-define
import React, { useContext } from 'react'
import styles from '../styles/components/Countdown.module.css'
import { FaCheckCircle } from 'react-icons/fa'
import { RiCloseLine, RiPlayFill } from 'react-icons/ri'
import { CountdownContext } from '../contexts/CountdownContext'

export function Coutdown () {
  const { minutes, seconts, hasFinished, isActive, resetCountdown, startCountdown } = useContext(CountdownContext)

  const [minLeft, minRight] = String(minutes).padStart(2, '0').split('')
  const [secLeft, secRight] = String(seconts).padStart(2, '0').split('')

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minLeft}</span>
          <span>{minRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secLeft}</span>
          <span>{secRight}</span>
        </div>
      </div>

      {
        hasFinished
          ? (
            <button disabled type="button" className={`${styles.countdownButton}`}>
              Ciclo encerado
              <FaCheckCircle color="var(--green)"/>
            </button>
            )
          : (
            <>
              {
                !isActive
                  ? (
                    <button type="button" className={`${styles.countdownButton} ${styles.newCyclo}`} onClick={startCountdown}>
                      Iniciar novo ciclo
                      <RiPlayFill />
                    </button>
                    )
                  : (
                    <button type="button" className={`${styles.countdownButton} ${styles.quitCyclo}`} onClick={resetCountdown}>
                      Abandonar ciclo
                      <RiCloseLine />
                    </button>
                    )
              }
            </>
            )
      }
    </div>
  )
}
