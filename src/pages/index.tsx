import { CompletedChallengers } from '../components/CompletedChallengers'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import styles from '../styles/pages/Home.module.css'

export default function Home () {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallengers />
        </div>
        <div>
          
        </div>
      </section>
    </div>
  )
}
