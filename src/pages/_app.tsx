
// eslint-disable-next-line no-use-before-define
import React from 'react'
import { ChallengersProvider } from '../contexts/ChallengersContexts'
import { CountdownProvider } from '../contexts/CountdownContext'

import '../styles/global.css'

function MyApp ({ Component, pageProps }: any) {
  return (
    <ChallengersProvider>
      <CountdownProvider>
        <Component {...pageProps} />
      </CountdownProvider>
    </ChallengersProvider>
  )
}

export default MyApp
