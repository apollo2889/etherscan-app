import React from 'react'
import './App.css'
import { Loading } from './components/Common'
import { AppRoutes } from './routes'

function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <AppRoutes />
    </React.Suspense>
  )
}

export default App
