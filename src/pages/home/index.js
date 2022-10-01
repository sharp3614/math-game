import React from 'react'
import { useNavigate } from 'react-router-dom';

import headerLine from '../../assets/line.svg'
import { Button, Radio } from '../../components';
import { useData } from '../../context/use-data';
import './style.scss'
const Home = () => {
    const { gameData, newDataScore, setNewDataScore, setResults } = useData()
    const navigate = useNavigate()
    const handleStart = () => {
        setNewDataScore({
            ...newDataScore,
            question: 1,
            point: 0,
            correct: 0,
            inCorrect: 0
        })
        setResults([])
        navigate("/game")
    }


    return (
        <>
            <div className="math_game_text">
                <h1 className="text">Matematik Oyunu</h1>
                <img className="header_line" src={headerLine} alt="math_game_header_line" />
            </div>
            <div className="dash_container">
                <ul className="total_score">
                    <li>Puan: {gameData.totalPoint}</li>
                    <li>Çözülen Sayısı: {gameData.totalSolvedQuestions}</li>
                    <li>Yanlış Cevap: {gameData.totalInCorrect}</li>
                    <li>Doğru Cevap: {gameData.totalCorrect}</li>
                </ul>
                <div className="transactions">
                    <Radio radioTitle="Toplama" radioId="topla" radioValue="topla" radioName="choice" />
                    <Radio radioTitle="Çıkarma" radioId="cikar" radioValue="cikar" radioName="choice" />
                    <Radio radioTitle="Çarpma" radioId="carp" radioValue="carp" radioName="choice" />
                    <Radio radioTitle="Bölme" radioId="bol" radioValue="bol" radioName="choice" />
                </div>
            </div>
            <Button buttonTitle="Başla" click={handleStart} />
        </>
    )
}

export default Home