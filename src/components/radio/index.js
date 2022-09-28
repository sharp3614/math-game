import React from 'react'
import './style.scss'
const Radio = (prop) => {
    const { radioName, radioTitle, radioId, select } = prop
    return (
        <>
            <input type="radio" id={radioId} name={radioName} value="Toplama" defaultChecked={select} />
            <label htmlFor={radioId}>{radioTitle}</label>
        </>
    )
}

export default Radio