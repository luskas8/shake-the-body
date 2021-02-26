import { GetServerSideProps } from 'next'
import Head from 'next/head'
// eslint-disable-next-line no-use-before-define
import React from 'react'
import { ChallengerBox } from '../components/ChallengerBox'
import { CompletedChallengers } from '../components/CompletedChallengers'
import { Coutdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { ChallengersProvider } from '../contexts/ChallengersContexts'
import { CountdownProvider } from '../contexts/CountdownContext'
import styles from '../styles/pages/Home.module.css'

interface HomeProps {
  level: number
  currentExperience: number
  challengersCompleted: number
}

export default function Home (props: HomeProps) {
  return (
    <ChallengersProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengersCompleted={props.challengersCompleted}
    >
      <div className={styles.container}>
        <Head><title>Início | Shake the Body</title></Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallengers />
              <Coutdown />
            </div>
            <div>
              <ChallengerBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengersProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengersCompleted } = ctx.req.cookies
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengersCompleted: Number(challengersCompleted)
    }
  }
}
