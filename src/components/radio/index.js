import React from 'react'
import { useData } from '../../context/use-data'
import './style.scss'
const Radio = (prop) => {
    const { radioName, radioTitle, radioId, radioValue } = prop
    const { newDataScore, setNewDataScore } = useData()
    const handleSelect = (value) => {
        setNewDataScore({ ...newDataScore, selectedAction: value })
    }
    return (
        <>
            <input onChange={(e) => handleSelect(e.target.value)} type="radio" id={radioId} name={radioName} value={radioValue} defaultChecked={newDataScore.selectedAction === radioValue} />
            <label htmlFor={radioId}>{radioTitle}</label>
        </>
    )
}

export default Radio