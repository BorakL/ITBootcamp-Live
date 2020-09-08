import axios from 'axios'

export const getAll = () => {
    return axios.get('https://reqres.in/api/users?page=2')
}