import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Citati from './components/Citati';
import Footer from './components/Footer';
import Form from './components/Form';

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

  return (
    <>
      <Router>
        <Nav />
      
        <Switch>
          <Route exact path="/">
            <Citati citati={citati} />
          </Route>
          <Route path="/create">
            <Form setCitati={setCitati} />
          </Route>
        </Switch>

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

