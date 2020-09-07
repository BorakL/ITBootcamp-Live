import React from 'react'
import ReactDOM from 'react-dom'

// uuid

const Todo = ({todo}) => {
    return (
        <p>{todo.task} -- {todo.done + ''}</p>
    )
}

const App = ({ lista }) => {
    return (
        <>
            {lista.map(el => <Todo key={el.id} todo={el} />)}
        </>
    )
}

 
const lista = [
    {
        id: 1,
        task: 'Уради нешто',
        done: true
    },
    {
        id: 2,
        task: 'Уради нешто drugo',
        done: false
    },
    {
        id: 3,
        task: 'Уради нешто треће',
        done: true
    }
]

ReactDOM.render(
    <React.StrictMode>
        <App lista={lista} />
    </React.StrictMode>,
    document.getElementById('root')
)