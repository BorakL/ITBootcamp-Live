import React, { useEffect, useState } from 'react'
import Country from './Country'

const Countries = ({countries,region}) => {
    const [count,setCount] = useState(0)

    useEffect(() => {
        setCount(0)
    },[countries])

    return (
        <>
        <div>
            {countries.slice(count,count+10).map(country => <Country key={country.alpha2Code} country={country} region={region} />)}
        </div>
        <button disabled={count === 0} onClick={() => setCount(count - 10)}>BACK</button>
        <button disabled={count > countries.length - 10} onClick={() => setCount(count + 10)}>NEXT</button>
        </>
    )
}

export default Countries