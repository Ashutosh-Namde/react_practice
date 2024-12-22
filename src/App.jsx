/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Card from './components/Card'

function App() {
  const [score , setScore] = useState(10)
  return (
    <div>
      <h1>{score}</h1>
      <Card />
    </div>
  )
}

export default App