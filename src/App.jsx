//react imports
import { useState } from 'react'

//component imports
import Header from './components/header'
import Mission from './components/mission-statement'
import Mission2 from './components/mission-statement2'
import Intro from './components/intro'

//style import
import './styles/App.css'

function App() {

  return (
    <>
      <Header />
      <Mission />
      <Mission2 />
      <Intro />
    </>
  )
}

export default App
