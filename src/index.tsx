import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { MoralisProvider } from 'react-moralis'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <MoralisProvider
      serverUrl={process.env.REACT_APP_MORALIS_DAPP_URL ?? ''}
      appId={process.env.REACT_APP_MORALIS_APPLICATION_ID ?? ''}
    >
      <App />
    </MoralisProvider>
  </React.StrictMode>,
)

reportWebVitals()
