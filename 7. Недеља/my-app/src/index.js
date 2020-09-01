import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ ime,godine }) => {
  // let ime = props.ime
 
  return (
    <header>
      <h2>Hello {ime}</h2>
    </header>
  )
}
// JSX синтакса
const App = () => {
  let greet = 'Hello'
  let a = 5
  let b = 10

  const veci = (a,b) => {
    if(a > b)
      return a
    else return b
  }

  return (
    <div>
      <Header ime="Pera" godine="32" />
      <Header ime="Zika" />
      <Header ime="Ana" />
      <p>{greet}</p>
      <p>{a} + {b} = {a + b}</p>
      <p>Већи од два броја је: 
        {
          veci(a,b)
        }
        </p>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

