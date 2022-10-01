import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { correctResultSVG, questionSVG, wrongResultSVG } from '../../assets'

import { GenerateQuestion } from '../../constants/question'
import { useData } from '../../context/use-data'
import './style.scss'
const Game = () => {
    const { newDataScore, setGameData, gameData, setNewDataScore, thema, setThema, results, setResults } = useData()
    const [questionProp, setQuestinProp] = useState({})
    const [answers, setAnswers] = useState([])
    const navigate = useNavigate()

    const handleChoice = (e) => {
        if (Number(e) === questionProp.answer) {
            setThema("correct")
            setNewDataScore({
                ...newDataScore,
                point: newDataScore.point += questionProp.questionPoint,
                correct: newDataScore.correct += 1
            })
            setResults([...results, { ...questionProp, userAnswer: true }])
        }
        else {
            setThema("worring")
            setResults([...results, { ...questionProp, userAnswer: false }])
            setNewDataScore({ ...newDataScore, inCorrect: newDataScore.inCorrect += 1 })
        }
        setTimeout(() => {
            setThema("")
            if (newDataScore.question < 10) {
                setNewDataScore({ ...newDataScore, question: newDataScore.question + 1 })
            }
            else {
                setGameData({
                    ...gameData,
                    totalPoint: gameData.totalPoint + newDataScore.point,
                    totalSolvedQuestions: gameData.totalSolvedQuestions + newDataScore.question,
                    totalInCorrect: gameData.totalInCorrect + newDataScore.inCorrect,
                    totalCorrect: gameData.totalCorrect + newDataScore.correct,
                    tour: gameData.tour + 1
                })
                navigate("/result")
            }
        }, 800)

    }
    useEffect(() => {
        if (newDataScore.question <= 0) {
            navigate("/")
        }
    }, [navigate, newDataScore.question])
    useEffect(() => {
        setQuestinProp(GenerateQuestion(newDataScore.selectedAction))
        let mixed = ["answer_A", "answer_B", "answer_C"].sort(() => Math.random() - 0.5)
        setAnswers(mixed)
    }, [newDataScore.question, newDataScore.selectedAction])


    return (
        <div className="container">
            <div className="question_side">
                {thema === "" ? questionSVG : thema === "correct" ? correctResultSVG : wrongResultSVG}
                <div className="question">{questionProp.num1} {questionProp.operator} {questionProp.num2}</div>
            </div>
            <div className="right_side">
                <ul className="score">
                    <li>Puan: {newDataScore.point}</li>
                    <li>Tur: {gameData.tour}</li>
                    <li>Soru: {newDataScore.question}</li>
                </ul>
                <div className="answers">
                    <div className={"answer " + answers[0]} onClick={(e) => handleChoice(e.target.innerHTML)}>{questionProp.answer}</div>
                    <div className={"answer " + answers[1]} onClick={(e) => handleChoice(e.target.innerHTML)}>{questionProp.fakeAnswer1}</div>
                    <div className={"answer " + answers[2]} onClick={(e) => handleChoice(e.target.innerHTML)}>{questionProp.fakeAnswer2}</div>
                </div>
            </div>
        </div>
    )
}

export default Game