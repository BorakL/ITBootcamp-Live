import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

// React state
// Компонента која садржи  state је stateful компонента
const App = () => {

  const [name,setName] = useState('Pera')
  const [counter,setCounter] = useState(0)

  const handleKlik = () => {
    setName('Zika')
  }

  // function renderCondition(){
  //   if(counter === 0){
  //     return 'Још увек није кликнуто'
  //   }
  //   else
  //     return counter
  // }

  return (
    <>
      <Header name={name} handleKlik={handleKlik} />
      <p>{counter !== 0 ? counter: 'Још увек није кликнуто'}</p>
      <button onClick={() => setCounter(counter + 1)}>ПОВЕЋАЈ БРОЈ</button>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

