import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { getTopStories, getJobStories, getShowStories, getAskStories } from './services';
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
    <button onClick={() => {
      getJobStories().then(res => {
        setStoryIds(res.data)
      })
    }}>JOB</button>
    <button onClick={() => {
      getShowStories().then(res => {
        // setStoryIds([...storyIds,...res.data])
        setStoryIds(storyIds.concat(res.data))
      })
    }}>Show</button>
    <button onClick={() => {
      getAskStories().then(res => {
        setStoryIds(res.data)
      })
    }}>Ask</button>

    <div>
      {storyIds.map(id => <Story key={id} id={id} />)}
    </div>
      
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
