import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const isLoggedIn = true // SHOULD TAKE FROM REDUX

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} component={(props) => {
           return (isLoggedIn ? <Component {...props} />
                       : <Redirect to="/login" />)
        }} />
    )
}

export default PrivateRoute