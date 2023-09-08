import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Componets/Counter'

function App() {
  

  return (
    <>
   <h1>FIRST REACT APP!</h1>
   <nav>
    <span>Home</span>
    <span>About</span>
    <span>Counter</span>
    <span>New Profile</span>
   </nav>
   <Counter/>
    </>
  )
}

export default App
