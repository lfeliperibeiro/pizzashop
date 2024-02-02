import React from 'react'
import ReactDOM from 'react-dom/client'

import { startMSW } from './api/mocks'
import { App } from './app'

startMSW().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
