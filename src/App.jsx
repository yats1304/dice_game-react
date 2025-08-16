import styled from "styled-components";
import StartGame from "./assets/components/StartGame";
import GamePlay from "./assets/components/GamePlay";
import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>}
    </>
  )
}
 
export default App;