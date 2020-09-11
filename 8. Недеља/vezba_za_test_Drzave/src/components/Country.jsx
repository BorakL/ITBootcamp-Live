import React from 'react'
import { useState } from 'react'

export const Country = ({ country, isOnlyOne }) => {
    const [visible, setVisible] = useState(false)

    const detail = () => {
        return (<p>{country.capital + ' | ' + country.population}
            <img style={{ width: '150px' }} alt='' src={country.flag} /></p>)
    }

    return (
        <div>
            <p>{country.name}</p>

            {
                isOnlyOne ?
                    detail()
                    :
                    <button onClick={() => {
                        setVisible(true)
                    }}>POKAZI VISE</button>
            }

            {visible && !isOnlyOne ? detail() : ''}

        </div>
    )
}