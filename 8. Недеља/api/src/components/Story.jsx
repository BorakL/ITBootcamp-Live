import React, { useEffect, useState } from 'react'
import { getStoryById } from '../services'

export const Story = ({ id }) => {
    const [story,setStory] = useState({})

    useEffect(() => {
        getStoryById(id).then(res => {
            setStory(res.data)
        })
    },[])


    return(
        <a href={story.url}>{story.title}</a>
    )
}

