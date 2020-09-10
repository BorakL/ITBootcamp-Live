import React from 'react';
import ReactDOM from 'react-dom';

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
    const [persons, setPersons] = useState([])
    const [filter, setFilter] = useState('')

    return (
        <div>
            <h2>Именик</h2>
            <Filter filter={filter} setFilter={setFilter} />
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
