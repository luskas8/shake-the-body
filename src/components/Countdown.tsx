// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import styles from '../styles/components/Countdown.module.css'
import { FaCheckCircle } from 'react-icons/fa'
import { RiCloseLine, RiPlayFill } from 'react-icons/ri'

// eslint-disable-next-line no-undef
let countdownTimeout: NodeJS.Timeout

export function Coutdown () {
  const [time, setTime] = useState(0.05 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconts = time % 60

  const [minLeft, minRight] = String(minutes).padStart(2, '0').split('')
  const [secLeft, secRight] = String(seconts).padStart(2, '0').split('')

  function startCountdown () {
    setIsActive(true)
  }

  function resetCountdown () {
    clearInterval(countdownTimeout)
    setIsActive(false)
    setTime(0.05 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
    }
  }, [isActive, time])

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
