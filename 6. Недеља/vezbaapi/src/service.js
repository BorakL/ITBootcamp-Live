import axios from 'axios'

export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/users')
}

export const getUser = (x) => {
    return axios.get(`https://reqres.in/api/users/${x}`)
}

export const postUser = (name,job) => {
    return axios.post('https://reqres.in/api/users',{name,job})
}

export const postUser2 = (user) => {
    return axios.post('https://reqres.in/api/users',user)
}

export const registerUser = (email,password) => {
    return axios.post('https://reqres.in/api/register',{email,password})
}