// eslint-disable-next-line no-use-before-define
import React, { createContext, ReactNode, useState } from 'react'

import challengers from '../../challenges.json'

interface ChallengersProviderProps {
  children: ReactNode;
}

interface Challenger {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengersContextData {
  level: number
  currentExperience: number
  challengersCompleted: number
  activeChallenger: Challenger
  levelUp: () => void
  startNewChallenger: () => void
  resetChallenger: () => void
}

export const ChallengersContext = createContext({} as ChallengersContextData)

export function ChallengersProvider ({ children }: ChallengersProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengersCompleted, setChallengersCompleted] = useState(0)
  const [activeChallenger, setActiveChallenger] = useState(null)

  function levelUp () {
    setLevel(level + 1)
  }

  function startNewChallenger () {
    const randomChallengerIndex = Math.floor(Math.random() * challengers.length)
    const challenger = challengers[randomChallengerIndex]

    setActiveChallenger(challenger)
  }

  function resetChallenger () {
    setActiveChallenger(null)
  }

  return (
    <ChallengersContext.Provider
      value={{
        level,
        currentExperience,
        challengersCompleted,
        activeChallenger,
        levelUp,
        startNewChallenger,
        resetChallenger
      }}
    >
      {children}
    </ChallengersContext.Provider>
  )
}
