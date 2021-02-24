// eslint-disable-next-line no-use-before-define
import React, { createContext, ReactNode, useState } from 'react'

interface ChallengersProviderProps {
  children: ReactNode;
}

interface ChallengersContextData {
  level: number;
  currentExperience: number
  challengersCompleted: number
  levelUp: () => void;
  startNewChallenger: () => void;
}

export const ChallengersContext = createContext({} as ChallengersContextData)

export function ChallengersProvider ({ children }: ChallengersProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengersCompleted, setChallengersCompleted] = useState(0)

  function levelUp () {
    setLevel(level + 1)
  }

  function startNewChallenger () {
    console.log('New challenger')
  }

  return (
    <ChallengersContext.Provider
      value={{
        level,
        currentExperience,
        challengersCompleted,
        levelUp,
        startNewChallenger
      }}
    >
      {children}
    </ChallengersContext.Provider>
  )
}
