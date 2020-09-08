import axios from 'axios'

export const getTopStories = () => {
    return axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
}

export const getStoryById = (id) => {
    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
}