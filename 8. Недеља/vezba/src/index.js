import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { v1 as uuidv1 } from 'uuid';


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

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  const addTodo = (e) => {
    e.preventDefault()
    setTodos(todos.concat({id: uuidv1(),task: text,done: false}))
    setText('')
  }

  return (
    <>
      <form onSubmit={addTodo}>
        <input 
          onChange={handleTextChange} 
          value={text} 
        />
        <button type="submit">Додај</button>
      </form>
      
      {todos.length > 0 ? 
        todos.map(el => <Todo key={el.id} todo={el} setTodos={setTodos} todos={todos} />)
        :
        <p className={5 > 3 ? 'precrtano' : null}>Нема још увек</p>
      }
      
    </>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)