import React from 'react'

const Filter = ({ setFilter }) => {
    return (
        <input onChange={(e) => {
            setFilter(e.target.value)
        }} />
    )
}

export default Filter