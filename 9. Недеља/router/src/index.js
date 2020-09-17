import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Citat from './components/Citat';
import Citati from './components/Citati';
import Footer from './components/Footer';
import Form from './components/Form';
import { getAllQuotes } from './services';

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/create">Create New</Link>
    </nav>
  )
}

const App = () => {
  const [citati,setCitati] = useState([])

  // let tmp = []
  // for(let i = 0; i < citati.length; i++){
  //   let row = []
  //   for(let j = 0; j < citati[i].length; j++){
  //     row.push({...citati[i][j]})
  //   }
  // }


  useEffect(() => {
    getAllQuotes().then(res => {
      setCitati(res.data)
    })
  },[])

  return (
    <>
      <Router>
        <Nav />
        <hr />
        <Switch>
          <Route exact path="/">
            <Citati citati={x} />
          </Route>
          <Route path="/create">
            <Form setCitati={setCitati} />
          </Route>
          <Route path="/citat/:id">
            <Citat citati={citati} />
          </Route>
        </Switch>
        <hr />
        <Footer />
      </Router>
    </>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

