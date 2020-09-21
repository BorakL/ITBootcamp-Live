import React from 'react'

const Login = () => {

    const login = (e) => {
        e.preventDefault()
        console.log(e.target.email.value,e.target.password.value)
    }

    return(
        <form onSubmit={login}>
            <input type="email" placeholder="e-mail..." name="email" />
            <input type="password" placeholder="password..." name="password" />
            <input type="submit" />
        </form>
    )
}

export default Login