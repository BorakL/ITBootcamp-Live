import React from 'react'

const Country = ({country,region}) => {
    return (
        <>
           <img
                src={country.flag} 
                alt={`Flag of ${country.name}`} 
                width={'100px'} 
                style={{border: '2px solid black'}} 
            />
           {region && <p>Name: {country.name} --  Population: {country.population}</p>}
        </>
    )
}

export default Country