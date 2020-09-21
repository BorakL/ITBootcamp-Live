import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const isLoggedIn = true // SHOULD TAKE FROM REDUX
const isRestricted = false // SHOULD TAKE FROM REDUX

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} component={(props) => {
           return (isLoggedIn && !isRestricted ? <Component {...props} />
                       : <Redirect to="/login" />)
        }} />
    )
}

export default PublicRoute