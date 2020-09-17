import React from 'react'
import { Redirect, useParams } from 'react-router-dom'

const Citat = ({citati}) => {
    const id = useParams().id
    const citat = citati.find(el => el.id === id)

    return citat ? 
    (
        <div>
            <p>Аутор: {citat.autor}</p>
            <p><a href={citat.url} target={'_blank'} rel="noopener noreferrer">Цитат:</a> {citat.text}</p>
        </div>
    )
    :
    <Redirect to="/" />
}

export default Citat