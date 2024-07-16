import styled from "styled-components"
import './App.css'
import StartGame from "./components/StartGame";
import { useState } from "react";
import Gameplay from "./components/Gameplay";



function App() {



  const [isGameStarted, setIGameStarted] = useState(false)
  const toggleGamePlay = () => {

    setIGameStarted((prev) => !prev)
  }
  return (
    <>
      {
        isGameStarted ? <Gameplay /> : <StartGame
          toggle={toggleGamePlay} />
      }
    </>
  )
}

export default App


