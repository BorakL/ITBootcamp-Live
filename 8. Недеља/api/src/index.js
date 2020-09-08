import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { getTopStories, getStoryById } from './services';

const App = () => {

  const [storyIds, setStoryIds] = useState([])
  const [stories,setStories] = useState([])


  useEffect(() => {
    getTopStories().then(res => {
      setStoryIds(res.data)
    })
  },[])


  useEffect(() => {
    storyIds.forEach(id => {
      getStoryById(id).then(res => {
        setStories(prev => [...prev,res.data])
      })
    })
  },[storyIds])

  

  return (
    <>
      {stories.map(story => <p key={story.id}>{story.title}</p>)}
      <button onClick={() => {
        getJobbStories().then(res => {
          setStoryIds(res.data)
        })
      }}>JOB</button>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
