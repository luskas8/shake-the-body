// eslint-disable-next-line no-use-before-define
import React, { createContext, ReactNode, useEffect, useState } from 'react'

import challengers from '../../challenges.json'

interface ChallengersProviderProps {
  children: ReactNode
}

interface Challenger {
  type: 'body' | 'eye'
  description: string
  amount: number
}

interface ChallengersContextData {
  level: number
  currentExperience: number
  challengersCompleted: number
  experienceToNextLevel: number
  activeChallenger: Challenger
  levelUp: () => void
  startNewChallenger: () => void
  resetChallenger: () => void
  completeChallenger: () => void
}

export const ChallengersContext = createContext({} as ChallengersContextData)

export function ChallengersProvider ({ children }: ChallengersProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengersCompleted, setChallengersCompleted] = useState(0)
  const [activeChallenger, setActiveChallenger] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  function levelUp () {
    setLevel(level + 1)
  }

  function startNewChallenger () {
    const randomChallengerIndex = Math.floor(Math.random() * challengers.length)
    const challenger = challengers[randomChallengerIndex]

    setActiveChallenger(challenger)

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      console.log('AAAA')
      // eslint-disable-next-line no-new
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenger.amount} xp!`
      })
    }
  }

  function resetChallenger () {
    setActiveChallenger(null)
  }

  function completeChallenger () {
    if (!activeChallenger) {
      return null
    }

    // xp ganha por esse desafio
    const { amount } = activeChallenger

    // xp somada ao que já se tem
    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel
      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenger(null)
    setChallengersCompleted(challengersCompleted + 1)
  }

  return (
    <ChallengersContext.Provider
      value={{
        level,
        currentExperience,
        challengersCompleted,
        activeChallenger,
        experienceToNextLevel,
        levelUp,
        startNewChallenger,
        resetChallenger,
        completeChallenger
      }}
    >
      {children}
    </ChallengersContext.Provider>
  )
}
