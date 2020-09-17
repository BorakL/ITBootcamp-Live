import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { v1 as uuidv1 } from 'uuid'
import { postQuote } from '../services'

const Form = ({setCitati}) => {
    const [author,setAuthor] = useState('')
    const [text,setText] = useState('')
    const [url,setUrl] = useState('')

    const history = useHistory()

    const dodajCitat = (e) => {
        e.preventDefault()

        let tmp = {
            autor: author,
            text: text,
            url: url,
            id: uuidv1()
        }
        
        setCitati(prev => prev.concat(tmp))
        postQuote(tmp)
        history.push('/')
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