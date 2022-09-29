import React from 'react'

import headerLine from '../../assets/line.svg'
import { Button, Radio } from '../../components';
import { useData } from '../../context/use-data';
import './style.scss'
const Home = () => {
    const {gameData} = useData()
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
                    <li>Yanlış Cevap: {gameData.totalCorrect}</li>
                    <li>Doğru Cevap: {gameData.totalInCorrect}</li>
                </ul>
                <div className="transactions">
                    <Radio radioTitle="Toplama" radioId="topla" radioName="choice" select />
                    <Radio radioTitle="Çıkarma" radioId="cikar" radioName="choice" />
                    <Radio radioTitle="Çarpma" radioId="carp" radioName="choice" />
                    <Radio radioTitle="Bölme" radioId="bol" radioName="choice" />
                </div>
            </div>
            <Button buttonTitle="Başla" path="/game" />
        </>
    )
}

export default Home