import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Beautiful Animation</h1>
      <h4>Andorka Dominik</h4>
      <div class="animation-container">
          <span></span>
          <span></span>
          <span></span>
      </div>
    </>
  )
}

export default App
