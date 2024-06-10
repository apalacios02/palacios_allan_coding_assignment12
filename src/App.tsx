import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/MyButton/MyButton'
import Text from './components/Text/Text'
import Label from './components/Label/Label'
import Img from './components/Img/Img'
import HeroImage from './components/HeroImage/HeroImage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <MyButton label = 'Test Button'></MyButton>
      <p><Text></Text></p>
      <p><Label></Label></p>
      <p><Img src="src/components/Img/Sith Lord.jpg" alt="sithlord" /> </p>
      <p><HeroImage src="src/components/HeroImage/Nicol Bolas.jpg" alt="Nicol Bolas"/></p>
    </>
  )
}

export default App

