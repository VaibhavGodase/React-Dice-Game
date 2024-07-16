import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const Gameplay = () => {
    const [score, setScore] = useState(0)
    const [selectedNumber, setSelectedNumber] = useState()
    const [currentDice, setCurentDice] = useState(1)
    const [error, setError] = useState("")
    const [showRules, setShowRules] = useState(false)


    const generateRandomNumber = (min, max) => {
        // console.log(Math.floor(Math.random() * (max - min) * min));
        return Math.floor(Math.random() * (max - min) + min)


    }

    const roleDice = () => {
        if (!selectedNumber) {
            setError('please select any number')
            return
        }

        const randomNumber = generateRandomNumber(1, 7)
        console.log(randomNumber);

        setCurentDice((prev) => randomNumber)
        if (selectedNumber == randomNumber) {
            setScore(prev => prev + randomNumber)
        } else {
            setScore(prev => prev - 2)
        }

        setSelectedNumber(undefined)
    }
    const resetScore = () => {
        setScore(0)
    }


    return (
        <MainContainer>
            <div className="Topsection">
                <TotalScore score={score} />
                <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
            </div>
            <RollDice currentDice={currentDice} roleDice={roleDice} />
            <div className="btns">
                <OutlineButton onClick={resetScore}>Reset</OutlineButton>
                <Button onClick={() => setShowRules(prev => !prev)}>
                    {showRules ? "Hide " : "show "}
                    Show Rules</Button>
            </div>
            {showRules && <Rules />
            }        </MainContainer>
    )
};

export default Gameplay;

const MainContainer = styled.main`  
padding-top: 70px;
.Topsection{
    display: flex;
    justify-content: space-evenly;
    align-items: end;

}
.btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
`