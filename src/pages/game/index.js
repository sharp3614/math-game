import React from 'react'

import questionSVG from '../../assets/question.svg'
import './style.scss'
const Game = () => {
    return (
        <div className="container">
            <div className="question_side">
                <img src={questionSVG} alt="question_svg" />
                <div className="question">5 + 5</div>
            </div>
            <div className="right_side">
                <ul className="score">
                    <li>Puan: <span className="point">0</span></li>
                    <li>Tur: <span>0</span></li>
                    <li>Soru: <span>0</span></li>
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