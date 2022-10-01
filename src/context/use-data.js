import { createContext, useContext, useEffect, useState } from "react"

const DataContext = createContext()
export const useData = () => useContext(DataContext)

const DataProvider = ({ children }) => {

    const [thema, setThema] = useState("")
    const [results, setResults] = useState([])
    const [gameData, setGameData] = useState({
        totalPoint: 0,
        totalSolvedQuestions: 0,
        totalInCorrect: 0,
        totalCorrect: 0,
        tour: 1
    })
    const [newDataScore, setNewDataScore] = useState({
        point: 0,
        question: 0,
        correct: 0,
        inCorrect: 0,
        selectedAction: "topla"
    })
    useEffect(() => {
        document.title="Math Game"
        if (localStorage.getItem("Math")) {
            setGameData(JSON.parse(localStorage.getItem("Math")))
        }
    }, [])
    return (
        <DataContext.Provider value={{ gameData, setGameData, newDataScore, setNewDataScore, thema, setThema, results, setResults }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider

