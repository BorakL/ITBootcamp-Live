import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { getTopStories, getStoryById } from './services';
import { Story } from './components/Story'

const App = () => {

  const [storyIds, setStoryIds] = useState([])


  useEffect(() => {
    getTopStories().then(res => {
      setStoryIds(res.data)
    })
  },[])

  return (
    <>
      {storyIds.map(id => <Story key={id} id={id} />)}
      <button onClick={() => {
        getJobStories().then(res => {
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
