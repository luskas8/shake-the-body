
// eslint-disable-next-line no-use-before-define
import React from 'react'
import { ChallengersProvider } from '../contexts/ChallengersContexts'

import '../styles/global.css'

function MyApp ({ Component, pageProps }: any) {
  return (
    <ChallengersProvider>
      <Component {...pageProps} />
    </ChallengersProvider>
  )
}

export default MyApp
