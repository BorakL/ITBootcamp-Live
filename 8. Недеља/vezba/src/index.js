import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { v1 as uuidv1 } from 'uuid';

// На клик параграфа за todo, променити стање done (и додати стилизацију)
// Додати дугме delete које брише одређени todo
const Todo = ({ todo,setTodos,todos }) => {

  const deleteById = (id) => {
    let index = todos.findIndex(el => el.id === id)
    let tmp = [...todos]
    tmp.splice(index,1)
    setTodos(tmp)
  }
  const changeDone = (id) => {
    let index = todos.findIndex(el => el.id === id)
    let tmp = [...todos]
    tmp[index].done = !tmp[index].done
    setTodos(tmp)
  }

  return (
    <>
      <p onClick={() => changeDone(todo.id)}>{todo.task} -- {todo.done + ''}</p>
      <button onClick={() => deleteById(todo.id)}>X</button>
    </>
  )
}



const App = () => {
  const [todos,setTodos] = useState([])
  const [text,setText] = useState('')

  return (
    <>
      <input 
        onChange={(e) => {
          setText(e.target.value)
          console.log(e.target.value)
        }}
        value={text}
      />
      <button 
        onClick={() => {
          setTodos([...todos,{id: uuidv1(),task: text,done: false}])
          setText('')
        }}
      >
        Додај
      </button>
      {todos.map(el => <Todo key={el.id} todo={el} setTodos={setTodos} todos={todos} />)}
    </>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)