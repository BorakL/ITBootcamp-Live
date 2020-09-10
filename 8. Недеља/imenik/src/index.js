import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
    const [persons, setPersons] = useState([
      {
          name: 'Пера',
          number: '+381 614567891'
      },
      {
          name: 'Жика',
          number: '+381 614567821'
      },
      {
          name: 'Габријела',
          number: '+381 618797821'
      },
      {
          name: 'Максимилијан',
          number: '+381 619871451'
      },
      {
          name: 'Брица',
          number: '+381 678997821'
      },
      {
          name: 'Перица',
          number: '+381 674444821'
      }
  ])
    const [filter, setFilter] = useState('')

    return (
        <div>
            <h2>Именик</h2>
            <Filter setFilter={setFilter} />
            <PersonForm persons={persons} setPersons={setPersons}/>
            
            <h2>Контакти</h2>
            <Persons persons={persons} filter={filter} />
        </div>
    )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
