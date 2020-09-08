import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { getAll } from './services';

const App = () => {

  const [users,setUsers] = useState([])
  const [count,setCount] = useState(0)

  // useEffect  (componentDidMount)

  useEffect(() => {
    getAll().then(res => {
      // let tmp = [...users]
      // tmp.push(...(res.data.data))

      setUsers(res.data.data)
    })

    // ствари које радимо само једном
  },[])

  // Позива се на промену count-a
  useEffect(() => {
    console.log('UseEffect: ',count)
  },[count])

  function uradiNesto(x){
    console.log('direktno u fji',x)
  } 


  return (
    <>
    <button onClick={() => {
      setCount(count + 1)
      uradiNesto(count)
    }}>PPP</button>
    {users.map(user => <p key={user.id}>{user.email}</p>)}
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
