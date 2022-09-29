import React from 'react'

import questionSVG from '../../assets/question.svg'
import { useData } from '../../context/use-data'
import './style.scss'
const Game = () => {
    const { newDataScore } = useData()
    return (
        <div className="container">
            <div className="question_side">
                <img src={questionSVG} alt="question_svg" />
                <div className="question">5 + 5</div>
            </div>
            <div className="right_side">
                <ul className="score">
                    <li>Puan: {newDataScore.point}</li>
                    <li>Tur: {newDataScore.tour}</li>
                    <li>Soru: {newDataScore.question}</li>
                </ul>
                <div className="answers">
                    <div className="answer answer_A">12</div>
                    <div className="answer answer_B">20</div>
                    <div className="answer answer_C">15</div>
                </div>
            </div>
        </div>
    )
}

export default Game