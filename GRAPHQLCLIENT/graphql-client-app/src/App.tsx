import { useState } from 'react'
import reactLogo from './assets/react.svg'
import apolloLogo from './assets/apollo.svg'
import './App.css'
import AppointmentList from './pages/appointmentList'

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={apolloLogo} className="logo react" alt="Apollo logo" />
        </a>
      </div>
      <h1>Vite + React +Apollo Client</h1>
      <div className='card'>
        <AppointmentList/>
      </div>
    </div>
  )
}

export default App
