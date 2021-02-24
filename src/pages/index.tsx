import Head from 'next/head'

// eslint-disable-next-line no-use-before-define
import React from 'react'
import { CompletedChallengers } from '../components/CompletedChallengers'
import { Coutdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import styles from '../styles/pages/Home.module.css'
import { ChallengerBox } from '../components/ChallengerBox'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head><title>Início | Shake the Body</title></Head>
      <ExperienceBar />

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
    </div>
  )
}
