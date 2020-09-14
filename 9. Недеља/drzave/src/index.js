import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Countries from './components/Countries';
import Select from './components/Select';
import { getAllCountries, getCountriesByRegion } from './service';

const App = () => {
  const [allCountries,setAllCountries] = useState([])
  const [countries,setCountries] = useState([])
  const [region,setRegion] = useState(undefined)

  useEffect(() => {
    getAllCountries().then(res => {setCountries(res.data); setAllCountries(res.data)})
  },[])

  useEffect(() => {
    region ? getCountriesByRegion(region).then(res => setCountries(res.data)) 
      : setCountries(allCountries)
  },[region,allCountries])

  return (
    <>
      <Select setRegion={setRegion} />
      <Countries countries={countries} region={region} />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
