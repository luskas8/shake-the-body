// eslint-disable-next-line no-use-before-define
import React, { createContext, ReactNode, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import challengers from '../../challenges.json'
import { LevelUpModal } from '../components/LevelUpModal'

interface ChallengersProviderProps {
  children: ReactNode
  level: number
  currentExperience: number
  challengersCompleted: number
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
  isLevelUpModalOpen: boolean
  levelUp: () => void
  startNewChallenger: () => void
  resetChallenger: () => void
  completeChallenger: () => void
  closeLevelUpModal: () => void
}

export const ChallengersContext = createContext({} as ChallengersContextData)

export function ChallengersProvider ({ children, ...rest }: ChallengersProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1)
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
  const [challengersCompleted, setChallengersCompleted] = useState(rest.challengersCompleted ?? 0)

  const [activeChallenger, setActiveChallenger] = useState(null)
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('currentExperience', String(currentExperience))
    Cookies.set('challengersCompleted', String(challengersCompleted))
  }, [level, currentExperience, challengersCompleted])

  function levelUp () {
    setLevel(level + 1)
    setIsLevelUpModalOpen(true)
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

  function closeLevelUpModal () {
    setIsLevelUpModalOpen(false)
  }

  return (
    <ChallengersContext.Provider
      value={{
        level,
        currentExperience,
        challengersCompleted,
        activeChallenger,
        experienceToNextLevel,
        isLevelUpModalOpen,
        levelUp,
        startNewChallenger,
        resetChallenger,
        completeChallenger,
        closeLevelUpModal
      }}
    >
      {children}

      { isLevelUpModalOpen && <LevelUpModal /> }
    </ChallengersContext.Provider>
  )
}
