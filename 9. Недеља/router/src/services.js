import axios from 'axios'

export const getAllQuotes = () => {
    return axios.get('http://localhost:3005/citati')
}

export const postQuote = (citat) => {
    return axios.post('http://localhost:3005/citati',citat)
}

export const deleteQuoteById = (id) => {
    return axios.delete(`http://localhost:3005/citati/${id}`)
}