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
      serverUrl='https://kxvqkkx28oxi.usemoralis.com:2053/server'
      appId='2I8KMaWVax7Yd8gdPAxmZY7FuqrjyTKdKSL7jmVE'
    >
      <App />
    </MoralisProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
