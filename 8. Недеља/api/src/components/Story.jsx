import React, { useEffect, useState } from 'react'
import { getStoryById } from '../services'

export const Story = ({ id }) => {
    const [story,setStory] = useState({})

    useEffect(() => {
        let mounted = true

        getStoryById(id).then(res => {
            if(mounted)
                setStory(res.data)
        })

        return () => {mounted = false}
    },[])

    // Lifecycle methods
    // componentDidMount()
    // componentDidUnmount()
    // componentDidUpdate()

    return(
        <>
        <a href={story.url}>{story.title}</a>
        <br></br>
        </>
    )
}

