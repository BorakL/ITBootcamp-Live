import React from 'react'

const Header = ({ name, handleKlik }) => {
    // let ime = props.name
    return (
        <>
            <p>{name}</p>
            <button onClick={handleKlik}>КЛИК</button>
        </>
    )
}

export default Header