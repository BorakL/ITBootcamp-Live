import React, { useState } from 'react'
import { v1 as uuidv1 } from 'uuid'

const Form = ({setCitati}) => {
    const [author,setAuthor] = useState('')
    const [text,setText] = useState('')
    const [url,setUrl] = useState('')

    const dodajCitat = (e) => {
        e.preventDefault()

        let tmp = {
            author: author,
            text: text,
            url: url,
            id: uuidv1()
        }
        
        setCitati(prev => prev.concat(tmp))
    }

    return (
        <form onSubmit={dodajCitat}>
            <input type="text" placeholder="Аутор..." onChange={(e) => setAuthor(e.target.value)} />
            <input type="text" placeholder="Текст..." onChange={(e) => setText(e.target.value)}/>
            <input type="text" placeholder="URL..." onChange={(e) => setUrl(e.target.value)} />
            <input type="submit" value="Додај" />
        </form>
    )
}

export default Form