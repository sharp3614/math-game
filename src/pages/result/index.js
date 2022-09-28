import React from 'react'
import './style.scss'
import { Button } from '../../components'
const Result = () => {
    return (
        <div className="container_result">
            <div className="score_side">
                <div className="result_header_text">
                    <h3 className="text">Sonuç</h3>
                    <svg viewBox="0 0 228 8" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M227.999 1.38396C228.435 -1.20343 4.46015 0.459886 1.84811 1.38396C-0.763925 2.30802 -0.463579 4.58158 1.84811 7.298C4.1598 10.0144 220.742 3.97134 220.742 3.97134C220.742 3.97134 227.564 3.97134 227.999 1.38396Z"
                            fill="#FF0000" />
                    </svg>
                </div>

                <ul className="list">
                    <li>Puan: 0</li>
                    <li>Doğru Cevap: 0</li>
                    <li>Yanlış Cevap: 0</li>
                </ul>
                <Button cls="mt-2" buttonTitle="Başa Dön" path="/"/>
            </div>
            <div className="question_results">
                <div className="result_header_text">
                    <h3 className="text">Sonuç</h3>
                    <svg viewBox="0 0 228 8" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M227.999 1.38396C228.435 -1.20343 4.46015 0.459886 1.84811 1.38396C-0.763925 2.30802 -0.463579 4.58158 1.84811 7.298C4.1598 10.0144 220.742 3.97134 220.742 3.97134C220.742 3.97134 227.564 3.97134 227.999 1.38396Z"
                            fill="#FF0000" />
                    </svg>
                </div>

                <ul className="list result">
                    <li>3 x 4 = 12</li>
                </ul>
            </div>

        </div>
    )
}

export default Result