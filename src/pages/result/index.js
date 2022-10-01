import React, { useEffect } from 'react'
import './style.scss'
import { Button } from '../../components'
import { useNavigate } from 'react-router-dom'
import { useData } from '../../context/use-data'
import { header_border } from '../../assets'
const Result = () => {
    const { results, newDataScore, gameData } = useData()
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate("/")
    }
    useEffect(() => {
        if (results.length > 0) {
            localStorage.setItem("Math", JSON.stringify(gameData))
        }
    }, [gameData, results.length, results])
    return (
        <div className="container_result">
            <div className="score_side">
                <div className="result_header_text">
                    <h3 className="text">Sonuç</h3>
                    <img src={header_border} alt="header_border" />
                </div>
                <ul className="list mt-4">
                    <li>Puan: {newDataScore.point}</li>
                    <li>Doğru Cevap: {newDataScore.correct}</li>
                    <li>Yanlış Cevap: {newDataScore.inCorrect}</li>
                </ul>
                <Button cls="mt-1" buttonTitle="Başa Dön" click={handleSubmit} />
            </div>
            <div className="question_results">
                <div className="result_header_text">
                    <h3 className="text">Sonuç</h3>
                    <img src={header_border} alt="header_border" />
                </div>

                <ul className="list result mt-4">
                    {
                        results.map((item, id) => {
                            return <li key={id}><span>{item.num1} {item.operator} {item.num2} = {item.answer}</span> <span>{item.userAnswer? "✓":"x"}</span></li>
                        })
                    }
                </ul>
            </div>

        </div>
    )
}

export default Result