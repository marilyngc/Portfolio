import { useState } from 'react'
import { Home } from './components/page/home.jsx'
import './App.css'
import "./scss/styles.scss";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
  )
}

export default App
