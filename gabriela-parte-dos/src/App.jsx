import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Actividad 2</h1>
      <About/>
    </>
  )
}

export default App
