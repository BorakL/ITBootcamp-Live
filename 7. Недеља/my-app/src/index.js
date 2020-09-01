import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ ime }) => {
  // let ime = props.ime
 
  return (
    <header>
      <h2>Hello {ime}</h2>
    </header>
  )
}

// JSX синтакса (JavaScript XML)
const App = () => {
  let greet = 'Hello'
  let a = 5
  let b = 10

  let imena = ['Pera',5,'Ana']

  const veci = (a,b) => {
    if(a > b)
      return a
    else return b
  }

  return (
    <div>
      <Header ime={imena[0]} />
      <Header ime={imena[1]} />
      <Header ime={imena[2]} />
      <header>
        <h2>Hello {imena[0]}</h2>
      </header>
      <header>
        <h2>Hello {imena[1]}</h2>
      </header>
      <header>
        <h2>Hello {imena[2]}</h2>
      </header>
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

