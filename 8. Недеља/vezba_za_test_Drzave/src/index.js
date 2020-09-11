import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { getAllCountries } from './services';
import Filter from './components/Filter';
import Countries from './components/Countries';

const App = () => {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    getAllCountries().then(res => setCountries(res.data))
  }, [])

  return (
    <div>
      <Filter setFilter={setFilter} />
      <Countries countries={countries} filter={filter} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

