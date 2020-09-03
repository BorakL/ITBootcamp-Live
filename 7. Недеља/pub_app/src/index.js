import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'
import Content from './components/Content'
import Ukupno from './components/Ukupno'

const App = () => {
  const pab = {
    ime: 'Jolly',
    osobe: [
      {
        ime: 'Пера',
        alkohol: 5
      },
      {
        ime: 'Ана',
        alkohol: 7
      },
      {
        ime: 'Жика',
        alkohol: 13
      }
    ]
  }

  let ukupno = pab.osobe.reduce((ukupno,osoba) => ukupno + osoba.alkohol, 0)
  
  return (
    <div>
      <Header pab={pab.ime} />
      <Content 
        o1={pab.osobe[0].ime} a1={pab.osobe[0].alkohol}
        o2={pab.osobe[1].ime} a2={pab.osobe[1].alkohol}
        o3={pab.osobe[2].ime} a3={pab.osobe[2].alkohol}
      />
      <Ukupno kolicina={ukupno} />
    </div>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)