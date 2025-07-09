import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const name = "Rohit "

  const newNAme = <h2>FOOD</h2>;

  return (
    <>
      <div>
        <h1>Hello my name is  {name} </h1>
        {newNAme}
      </div>
    </>
  )
}

export default App
