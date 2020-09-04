import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Statistics from './components/Statistics'
import Button from './components/Button'

// styledComponents | StoryBook for React

const App = () => {
    const [good,setGood] = useState(0)
    const [neutral,setNeutral] = useState(0)
    const [bad,setBad] = useState(0)
    const [niz,setNiz] = useState([])
// [1,4,9,16,25] // [1,4,9,16,25]
    let tmp = []

    setNiz(niz.map(el => el ** 2))

    return (
        <div>
            <h1>Додај оцену:</h1>
            <Button onClick={() => console.log('ИЗ АПЛИКАЦИЈЕ')} />
            <button onClick={() => setGood(good + 1)}>Позитивно</button>
            <button onClick={() => setNeutral(neutral + 1)}>Неутрално</button>
            <button onClick={() => setBad(bad + 1)}>Негативно</button>
            <h1>Статистика:</h1>

            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
            />
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)




/////////////////////
// Алгоритам најкраћег пута
// A*
// Dijkstrin algoritam

// 1 0 -1 0 1 0
// 0 -1 1 0 1 -1
// 1 0 -1 0 1 0
// 0 1 1 0 1 1
// 1 0 1 0 1 0
// 0 0 1 0 1 0


