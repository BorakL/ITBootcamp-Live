import React from 'react'
import { Country } from './Country'

const Countries = ({ countries, filter }) => {

    const formatOutput = () => {

        let output = countries
            .filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))

        if (filter === '') {
            output = ''
        } else if (output.length > 10) {
            output = 'Budite specificniji , broj zemalja je veci od 10'
        } else if (output.length === 1) {
            output = output.map(country => <Country key={country.alpha2Code} country={country} isOnlyOne={true} />)
        } else {
            output = output.map(country => <Country key={country.alpha2Code} country={country} isOnlyOne={false} />)
        }

        return output
    }

    return (
        <>
            {formatOutput()}
        </>
    )
}

export default Countries