import React from 'react'

const Statistics = ({good,neutral,bad}) => {
    let ukupno = good + neutral + bad

    return ukupno ? (
        <>
            <p>Позитивно: {good}</p>
            <p>Неутрално: {neutral}</p>
            <p>Негативно: {bad}</p>
            <p>Укупно: {good + neutral + bad}</p>
            <p>Проценат позитивних: {good / (good + neutral + bad) * 100}%</p>
        </>
    )
    :
    (
        <p>hello</p>
    )
    
}

export default Statistics