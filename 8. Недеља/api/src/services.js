import axios from 'axios'

export const getTopStories = () => {
    return axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
}

export const getStoryById = (id) => {
    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
}

export const getJobStories = () => {
    return axios.get('https://hacker-news.firebaseio.com/v0/jobstories.json')
}

export const getShowStories = () => {
    return axios.get('https://hacker-news.firebaseio.com/v0/showstories.json')
}

export const getAskStories = () => {
    return axios.get('https://hacker-news.firebaseio.com/v0/askstories.json')
}