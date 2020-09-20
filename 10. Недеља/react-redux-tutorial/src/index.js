import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App.js'
import { Provider } from 'react-redux'
import { noteReducer } from './reducers/noteReducer.js'


const store = createStore(noteReducer)

  ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
  )

// store.subscribe(renderApp)