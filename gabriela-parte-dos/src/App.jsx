import { useState } from 'react'
import './App.css'
import About from './components/about'
import Form from './components/form1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Actividad 2</h1>
      <About nombre= {'Gabriela Arévalo'}
      sobreMi={'Soy una apasionada desarrolladora de software con experiencia en la creación de aplicaciones móviles y sitios webMe destaco por mi capacidad de adaptación a diferentes áreas deldesarrollo, incluyendo backend, diseño y sistemas de escritorio. Mi enfoque ordenado y responsable me permite afrontar nuevos retos con eficiencia y creatividad.'}/>
      <br />
      <h1>Actividad 3</h1>
      <br />
      <Form />
      <br />

    </>
  )
}

export default App
