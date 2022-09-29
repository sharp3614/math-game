import { createContext, useContext, useState } from "react"

const DataContext = createContext()
export const useData = () => useContext(DataContext)

const DataProvider = ({ children }) => {
    const [gameData, setGameData] = useState({
        totalPoint: 10,
        totalSolvedQuestions: 10,
        totalCorrect: 5,
        totalInCorrect: 5
    })
    const [newDataScore, setNewScoreData] = useState({
        point: 5,
        tour: 1,
        question: 1,
        correct: 0,
        inCorrect: 0
    })
    return (
        <DataContext.Provider value={{ gameData, setGameData, newDataScore, setNewScoreData }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider

