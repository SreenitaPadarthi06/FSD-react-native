import { useState } from 'react'
import Visit from './Visit'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Visit/>
    </>
  )
}

export default App
