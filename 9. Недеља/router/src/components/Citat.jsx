import React from 'react'

const Citat = ({author,url,text}) => {
    return (
        <div>
            <p>Аутор: {author}</p>
            <p><a href={url} target={'_blank'} rel="noopener noreferrer">Цитат:</a> {text}</p>
        </div>
    )
}

export default Citat