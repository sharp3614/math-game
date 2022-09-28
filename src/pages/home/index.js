import React from 'react'

import headerLine from '../../assets/line.svg'
import { Button, Radio } from '../../components';
import './style.scss'
const Home = () => {
    return (
        <>
            <div className="math_game_text">
                <h1 className="text">Matematik Oyunu</h1>
                <img className="header_line" src={headerLine} alt="math_game_header_line" />
            </div>
            <div className="dash_container">
                <ul className="total_score">
                    <li>Puan: 0</li>
                    <li>Çözülen Sayısı: 0</li>
                    <li>Yanlış Cevap: 0</li>
                    <li>Doğru Cevap: 0</li>
                </ul>
                <div className="transactions">
                    <Radio radioTitle="Toplama" radioId="topla" radioName="choice" select />
                    <Radio radioTitle="Çıkarma" radioId="cikar" radioName="choice" />
                    <Radio radioTitle="Çarpma" radioId="carp" radioName="choice" />
                    <Radio radioTitle="Bölme" radioId="bol" radioName="choice" />
                </div>
            </div>
            <Button buttonTitle="Başla" />
        </>
    )
}

export default Home