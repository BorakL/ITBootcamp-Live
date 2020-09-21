import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './routes/Dashboard';
import Login from './routes/Login';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

// TODO - States
// 1. Logged in user
// 2. Restricted pages

const App = () => {
  return (
    <Router>
      <Switch>
          <PublicRoute component={Login} path="/login" />
          <PrivateRoute component={Dashboard} path="/dashboard" />
          <Route component={() => <p>404</p>} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


