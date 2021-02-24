import { useState, useEffect } from 'react'
import styles from '../styles/components/Countdown.module.css'

export function Coutdown() {
  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconts = time % 60

  const [minLeft, minRight] = String(minutes).padStart(2, '0').split('')
  const [secLeft, secRight] = String(seconts).padStart(2, '0').split('')

  function startCountdown() {
    setIsActive(true)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
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

      <button type="button" className={styles.countdownButton} onClick={startCountdown}>
        Iniciar um ciclo
    </button>
    </div>
  )
}